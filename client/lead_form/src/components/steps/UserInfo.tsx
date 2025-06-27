import { Box, Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";
import { memo } from "react";
import { useFormContext } from "../../context/formContext";
import { AppLogo } from "../AppLogo";
import Logo from '../../assets/img/logo-transparent.png';
const UserInfo = memo( () => {
  const { userInfoForm, next } = useFormContext()

  const onSubmit = () => {
    userInfoForm.handleSubmit( next )()
  }

  return (
    <Box py={ 2 }>
      <Container
        maxWidth="lg"
        sx={ {
          textAlign: 'center',
        } }
      >
        <Box display='flex' justifyContent='center' >
          <AppLogo
            pic={ Logo }
            width={ 260 }
            height={ 260 }
          />
        </Box>
        <Stack
          rowGap={ 2 }
          p={ 3 }
          maxWidth={ 600 }
          margin='0 auto'
        >

          <Typography
            variant="h5"
            align="center"
          >
            פרטים ליצירת קשר
          </Typography>
          <Divider sx={ { borderColor: 'gray', mb: 3 } } />
          <Box
            display='grid'
            gridTemplateColumns='repeat(2,1fr)'
            gap={ 3 }
          >
            <TextField
              fullWidth
              autoComplete="off"
              label="שם פרטי *"
              { ...userInfoForm.register( 'firstName', { required: true } ) }
              error={ !!userInfoForm.formState.errors.firstName }
              helperText={ userInfoForm.formState.errors.firstName?.message }
              variant="outlined"
            />
            <TextField
              fullWidth
              autoComplete="off"
              label="שם משפחה *"
              { ...userInfoForm.register( 'lastName', { required: true } ) }
              error={ !!userInfoForm.formState.errors.lastName }
              helperText={ userInfoForm.formState.errors.lastName?.message }
              variant="outlined"
            />
          </Box>
          <Box display='flex' alignItems='center' flexGrow={ 1 }>
            <TextField
              fullWidth
              autoComplete="off"
              type="tel"
              label="מספר נייד *"
              { ...userInfoForm.register( 'phone', {
                required: 'יש להזין מספר נייד',
                minLength: {
                  value: 9,
                  message: 'מספר הנייד קצר מדי',
                },
                pattern: {
                  value: /^(\+972|0)?5[0-9]{8}$/,
                  message: 'מספר נייד לא תקין',
                },
              } ) }
              error={ !!userInfoForm.formState.errors.phone }
              helperText={ userInfoForm.formState.errors.phone?.message }
              variant="outlined"
            />
          </Box>
          <Box display='flex' alignItems='center' flexGrow={ 1 }>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              onClick={ onSubmit }
              sx={ {
                fontWeight: 500,
                mt: 2,
                py: 2,
                borderRadius: 3,
              } }
            >
              מיד מתחיל חיפוש נכס החלומות שלכם
            </Button>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
} );

export default UserInfo;