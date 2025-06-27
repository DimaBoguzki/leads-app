import { Box, Button, CircularProgress, Divider, Stack, TextField } from "@mui/material";
import { useFormContext } from "../../context/formContext";
import { CheckBoxGroup } from "../CheckboxGroup";
import { ctreateLead } from "../../service";
import { useState } from "react";
import { AppLogo } from "../AppLogo";
import confetti from "canvas-confetti";
import { MaxBudgetInput } from "../MaxBudgetInput ";
import Logo from '../../assets/img/logo.jpg';

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
      ctreateLead( {
        ...userInfo,
        ...data,
        city: 'כרמיאל',
        max_budget: data?.max_budget ? Number( data.max_budget ) : 0,
        number_rooms: [ '5', '5+' ]
      } ).catch( ( err ) => {
        console.error( 'Error creating lead:', err );
        alert( 'Failed response server' );
        setLoading( false );
      } );
      splash();
      await delay( 3000 );
      setLoading( false );

      reset();
      next();
    } )()
  }


  return (
    <Stack py={ 2 } flexGrow={ 1 } sx={ { overflowY: 'hidden', alignItems: 'center' } }>

      <Box display='flex' justifyContent='center' >
        <AppLogo
          pic={ Logo }
          width={ 220 }
          height={ 200 }
        />
      </Box>
      <Stack
        sx={ {
          overflowY: 'auto', p: 3, rowGap: 2,
          minWidth: { xs: '100%', sm: 600, md: 700, lg: 800, xl: 900 },
        } }
      // margin='0 auto'
      >
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
    </Stack>
  );
}

export default lookingForForm;