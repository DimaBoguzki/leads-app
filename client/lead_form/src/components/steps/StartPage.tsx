import { memo } from "react";
import { Box, Typography, Button, Container, Stack, Link } from '@mui/material';
import bgImage from '../../assets/img/start-page-house.jpeg';
import { AppLogo } from "../AppLogo";
import { useFormContext } from "../../context/formContext";


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
      } }
    >
      <Box sx={ {
        position: 'absolute',
        top: 0, right: 0, bottom: 0, p: 2,
      } }>
        <AppLogo width={ 80 } />
      </Box>
      <Container maxWidth="md" sx={ { textAlign: 'center' } }>
        <Stack rowGap={ 2 } alignItems="center" justifyContent="center">
          <AppLogo
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
          <Typography variant="h2" fontWeight={ 700 } gutterBottom>
            Dream House
          </Typography>
          <Typography variant="h5" fontWeight={ 300 } gutterBottom>
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