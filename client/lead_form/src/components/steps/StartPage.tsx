import { memo } from "react";
import { Box, Typography, Button, Container } from '@mui/material';
import bgImage from '../../assets/img/start-page-house.jpeg';
import { AppLogo } from "../AppLogo";
import { useFormContext } from "../../context/formContext";


const StartPage = memo(() => {

  const { next } = useFormContext();
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <AppLogo />
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Dream House
        </Typography>
        <Typography variant="h5" fontWeight={300} gutterBottom>
          החיפוש אחר נכס החלומות שלכם, מתחיל כאן!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4, fontWeight: 600, fontSize: '1.2rem' }}
          onClick={next}
        >
          מילוי פרטים קצר
        </Button>
      </Container>
    </Box>
  );
});


export default StartPage;