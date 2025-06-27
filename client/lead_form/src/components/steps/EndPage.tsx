import { memo } from "react";
import { Box, Typography, Container, Stack } from '@mui/material';
import bgImage from '../../assets/img/start-page-house.jpeg';
import { AppLogo } from "../AppLogo";
import Logo from '../../assets/img/logo.jpg';


const EndPage = memo( () => {

  return (

    <Box
      sx={ {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
      } }
    >
      <Container maxWidth="md" sx={ { textAlign: 'center', mt: 5 } }>
        <Stack alignItems="center" justifyContent="center">

          <Box className="blur-element" >
            <AppLogo
              pic={ Logo }
              width={ 200 }
              height={ 180 }
            />
          </Box>
          {/* <Stack justifyContent='center'>
            <Typography fontWeight={ 700 } textAlign='center' fontSize='1.5rem'>
              אמיל יקואלי
            </Typography>
            <Link href="tel:0527222668" textAlign='center' >
              <Typography fontWeight={ 500 } textAlign='center' fontSize='1.5rem'>
                0527-222-668
              </Typography>
            </Link>
          </Stack> */}
          <Stack mt={ 1 }>
            <Typography variant="h5" fontWeight={ 500 }  >
              תודה על שיתוף הפעולה
            </Typography>
            <Typography variant="h5" fontWeight={ 400 } >
              בקרוב נשלח אליכם נכסים רלוונטים
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>

  );
} );


export default EndPage;