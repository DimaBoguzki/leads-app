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
        // alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      } }
    >
      <Container maxWidth="md" sx={ { textAlign: 'center' } }>
        <Stack alignItems="center" justifyContent="center" sx={ { mt: 6 } }>
          <Box>
            <AppLogo
              pic={ Logo }
              width={ 200 }
              height={ 180 }
            />
          </Box>
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