import { Box, Button, CircularProgress, Container, Divider, Stack, TextField } from "@mui/material";
import { useFormContext } from "../../context/formContext";
import { CheckBoxGroup } from "../CheckboxGroup";
import { ctreateLead } from "../../service";
import { useState } from "react";
import { AppLogo } from "../AppLogo";
import confetti from "canvas-confetti";
import { MaxBudgetInput } from "../MaxBudgetInput ";


const areaOptions = [
  'גבעת רם',
  'מכוש',
  'רבין',
  'מערבית',
  'דרומית',
  'שכונת הגליל',
  'שכונת המייסדים',
]

const typeOptions = [
  'פרטי',
  'דו משפחדתי',
  'קוטג’',
  'דירת גן',
  'דירה בבניין',
  'פנטהאוז',
  'קרקע'
]
const roomsOptions = [
  '3',
  '4',
  '5',
  '5+'
]

const priorityOptions = [
  'גינה',
  'מרפסת',
  'ממד',
  'חניה',
  'מחסן',
  'מעלית',
  'נגישות'
]
const delay = ( ms: number ) => new Promise( resolve => setTimeout( resolve, ms ) );

function lookingForForm() {
  const { lookingForForm, userInfoForm } = useFormContext();
  const [ loading, setLoading ] = useState<boolean>( false );

  const { reset, next } = useFormContext();

  const splash = () => {
    confetti( {
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    } );
    confetti( {
      angle: 60,
      spread: 400,
      particleCount: 400,
      origin: { x: 0 }
    } );
    confetti( {
      angle: 60,
      spread: 400,
      particleCount: 400,
      origin: { x: 1 }
    } );
  }

  const onSubmit = () => {
    lookingForForm.handleSubmit( async ( data ) => {
      console.log( data );
      const userInfo = userInfoForm.getValues();
      console.log( userInfo );
      console.log( data );
      setLoading( true );
      const res = await ctreateLead( {
        ...userInfo,
        ...data,
        city: 'כרמיאל',
        max_budget: data?.max_budget ? Number( data.max_budget ) : 0,
        number_rooms: [ '5', '5+' ]
      } );

      console.log( res )

      splash();
      await delay( 1000 );
      setLoading( false );

      reset();
      next();
    } )()
  }


  return (
    <Box py={ 2 }>
      <Container
        maxWidth="lg"
        sx={ {
          textAlign: 'center',
        } }
      >
        <Stack
          rowGap={ 2 }
          p={ 3 }
          maxWidth={ 600 }
          margin='0 auto'
        >
          <Box display='flex' justifyContent='center' >
            <AppLogo width={ 220 } />
          </Box>
          <CheckBoxGroup
            control={ lookingForForm.control }
            name="area"
            label="שכונה"
            options={ areaOptions }
          />
          <Divider />
          <CheckBoxGroup
            control={ lookingForForm.control }
            name="type"
            label="סוג נכס"
            options={ typeOptions }
          />
          <Divider />
          <CheckBoxGroup
            control={ lookingForForm.control }
            name="number_rooms"
            label="כמות חדרים"
            options={ roomsOptions }
          />
          <Divider />
          <CheckBoxGroup
            control={ lookingForForm.control }
            name="priority"
            label="על מה אתם לא מוכנים לוותר"
            options={ priorityOptions }
          />
          <Divider />
          <MaxBudgetInput
            control={ lookingForForm.control }
            formState={ lookingForForm.formState }
            setValue={ lookingForForm.setValue }
            watch={ lookingForForm.watch }
          />
          <TextField
            fullWidth
            autoComplete="off"
            label="עוד משהו חשוב לך?"
            multiline
            rows={ 4 }
            { ...lookingForForm.register( 'other' ) }
            variant="outlined"
          />
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            onClick={ onSubmit }
            sx={ {
              fontWeight: 600,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }
          >
            { loading ? <CircularProgress size={ 20 } /> : 'בואו נמצא את הנכס שלכם' }

          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default lookingForForm;