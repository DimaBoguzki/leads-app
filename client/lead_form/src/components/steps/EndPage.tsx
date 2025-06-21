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
      <Box
        sx={ {
          position: 'fixed',
          top: 8, right: 0, bottom: 0, p: 2,
        } }
      >
        <AppLogo width={ 80 } />
      </Box>
      <Container maxWidth="md" sx={ { textAlign: 'center' } }>
        <Stack rowGap={ 2 } alignItems="center" justifyContent="center">
          <Typography variant="h5" fontWeight={ 700 } mt={ 2 }>
            תודה רבה על שבחרתם בי!
          </Typography>
          <AppLogo
            key={ 'aaa' }
            pic={ import.meta.env.VITE_PICTURE_URL }
            width={ 150 }
          />
          <Stack>
            <Typography fontWeight={ 700 } gutterBottom>
              אמיל יקורלי
            </Typography>
            <Link href="tel:0527222668" underline="none" color="secondary">
              <Typography fontWeight={ 500 } color="#fff">
                0527-222-668 📞
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>

  );
} );


export default EndPage;