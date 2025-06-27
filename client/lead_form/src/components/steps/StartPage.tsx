import { memo } from "react";
import { Box, Typography, Button, Container, Stack, Link } from '@mui/material';
import bgImage from '../../assets/img/start-page-house.jpeg';
import { AppLogo } from "../AppLogo";
import { useFormContext } from "../../context/formContext";
import Logo from '../../assets/img/logo.jpg';

const StartPage = memo( () => {
  const { next } = useFormContext();

  return (

    <Box
      sx={ {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        flexGrow: 1,
        overflowY: 'auto',
      } }
    >
      <Container maxWidth="md" sx={ { textAlign: 'center' } }>
        <Stack alignItems="center" justifyContent="center" mb={ 5 } >
          <Box
            sx={ {
              position: 'relative',
              filter: 'brightness(0.8)',
              top: 70,
              left: 15,
              zIndex: 99,
            } }
          >
            <AppLogo
              pic={ import.meta.env.VITE_PICTURE_URL }
              width={ 250 }
              height={ 250 }
            />
          </Box>
          <AppLogo
            pic={ Logo }
            width={ 200 }
            height={ 180 }
          />
          <Stack justifyContent='center'>
            <Typography fontWeight={ 700 } textAlign='center' fontSize='1.4rem'>
              אמיל יקואלי
            </Typography>
            <Link href="tel:0527222668" textAlign='center' >
              <Typography fontWeight={ 500 } textAlign='center' fontSize='1.4rem'>
                0527-222-668
              </Typography>
            </Link>
          </Stack>
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