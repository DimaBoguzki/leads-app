import { memo } from "react";
import { Box, Typography, Button, Container, Stack, Link } from '@mui/material';
import bgImage from '../../assets/img/start-page-house.jpeg';
import { AppLogo } from "../AppLogo";
import { useFormContext } from "../../context/formContext";
import Logo from '../../assets/img/logo-transparent.png';
import { formatPhoneNumber } from "../../utils";

const StartPage = memo( () => {
  const { next, info } = useFormContext();

  return (

    <Box
      sx={ {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',

        justifyContent: 'center',
        color: '#fff',
        flexGrow: 1,
        overflowY: 'auto',
      } }
    >
      <Container maxWidth="md" sx={ { textAlign: 'center' } }>
        <Stack alignItems="center" justifyContent="center">
          <Box
            sx={ {
              position: 'relative',
              filter: 'brightness(0.8)',
              top: 50,
              right: 0,
            } }
          >
            <AppLogo
              pic={ info.pic }
              width={ 240 }
              height={ 240 }
            />
          </Box>
          <Box display='flex' alignItems='center' >
            <Box
              sx={ {
                position: 'relative',
                top: 5,
                left: -5,
                zIndex: 99,
              } }
            >
              <AppLogo
                pic={ Logo }
                width={ 160 }
                height={ 140 }
              />
            </Box>
            <Stack justifyContent='center'>
              <Typography fontWeight={ 700 } textAlign='center' fontSize='1.2rem'>
                { info.name }
              </Typography>
              <Link href={ `tel:${info.phone}` } textAlign='center' >
                <Typography fontWeight={ 500 } textAlign='center' fontSize='1.2rem'>
                  { formatPhoneNumber( info.phone ) }
                </Typography>
              </Link>
            </Stack>
          </Box>
          <Typography variant="h6" fontWeight={ 400 }>
            החיפוש אחר נכס החלומות שלכם, מתחיל כאן!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={ { mt: 4, fontWeight: 600 } }
            onClick={ next }
          >
            מילוי פרטים קצר
          </Button>
        </Stack>
      </Container>
    </Box>

  );
} );


export default StartPage;