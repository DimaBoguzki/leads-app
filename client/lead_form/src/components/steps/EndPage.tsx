import { memo } from "react";
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import bgImage from '../../assets/img/start-page-house.jpeg';
import { AppLogo } from "../AppLogo";



const EndPage = memo( () => {

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
      } }
    >
      <Container maxWidth="md" sx={ { textAlign: 'center' } }>
        <Stack alignItems="center" justifyContent="center">
          <Stack mt={ 2 }>
            <Typography variant="h5" fontWeight={ 700 } >
              תודה על שיתוף הפעולה
            </Typography>
            <Typography variant="h6" fontWeight={ 700 }>
              בקרוב נשלח אליכם נכסים רלוונטים
            </Typography>
          </Stack>
          <Box
            sx={ {
              position: 'relative',
              filter: 'brightness(0.8)',
              top: 50,
              left: 15
            } }
          >
            <AppLogo
              pic={ import.meta.env.VITE_PICTURE_URL }
              width={ 300 }
            />
          </Box>
          <Stack justifyContent='center'>
            <Typography fontWeight={ 700 } textAlign='center' fontSize='1.5rem'>
              אמיל יקואלי
            </Typography>
            <Link href="tel:0527222668" textAlign='center' >
              <Typography fontWeight={ 500 } textAlign='center' fontSize='1.5rem'>
                0527-222-668
              </Typography>
            </Link>
          </Stack>
          <AppLogo width={ 200 } />
        </Stack>
      </Container>
    </Box>

  );
} );


export default EndPage;