import { Box, Button, Container, Divider, Stack, TextField } from "@mui/material";
import { useFormContext } from "../../context/formContext";
import { CheckBoxGroup } from "../CheckboxGroup";
import { ctreateLead } from "../../service";

const areaOptions = [
  'גבעת רם',
  'מכוש',
  'מערבית',
  'רבין',
  'דרומית',
  'גליל'
]

const typeOptions = [
  'דירה בבניין',
  'דירת גן',
  'דו משפחתי',
  'קרקע'
]
const roomsOptions = [
  '3',
  '4',
  '5',
  '5+'
]

const priorityOptions = [
  'ממד',
  'חניה',
  'מחסן',
  'גינה',
  'מרפסת',
  'מעלית',
  'נגישות'
]

function lookingForForm() {
  const { lookingForForm, userInfoForm } = useFormContext();

  const onSubmit = () => {
    lookingForForm.handleSubmit( async ( data ) => {
      console.log( data );
      const userInfo = userInfoForm.getValues();
      console.log( userInfo );
      console.log( data );
      const res = await ctreateLead( {
        ...userInfo,
        ...data,
        city: 'כרמיאל',
        max_budget: Number( data.max_budget ),
        number_rooms: [ '5', '5+' ]
      } );
      console.log( res );
      alert( 'הפרטים נשלחו בהצלחה, נחזור אליכם בהקדם!' );
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
          <TextField
            fullWidth
            autoComplete="off"
            label="תקציב מקסימלי"
            type="number"
            { ...lookingForForm.register( 'max_budget', {
              valueAsNumber: true,
              required: 'שדה חובה',
              validate: ( value ) => {
                if ( isNaN( value ) ) return 'חובה להזין מספר בלבד';
                return true;
              },
            } ) }
            error={ !!lookingForForm.formState.errors.max_budget }
            helperText={ lookingForForm.formState.errors.max_budget?.message }
            variant="outlined"
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
            } }
          >
            בואו נמצא את הנכס שלכם
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default lookingForForm;