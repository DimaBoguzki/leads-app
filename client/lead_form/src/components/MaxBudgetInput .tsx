import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

const formatNumberWithCommas = ( value: string ) =>
  value.replace( /\B(?=(\d{3})+(?!\d))/g, "," );

const removeCommas = ( value: string ) =>
  value.replace( /,/g, "" );

const MaxBudgetInput = ( props: {
  control: any;
  setValue: any;
  watch: ( name: string ) => any;
  formState: any;
} ) => {
  const { control, setValue, watch, formState } = props;
  const rawValue = watch( "max_budget" );

  useEffect( () => {
    // Ensure value is always a string for formatting
    if ( typeof rawValue === "number" ) {
      setValue( "max_budget", rawValue.toString() );
    }
  }, [ rawValue, setValue ] );

  return (
    <Controller
      name="max_budget"
      control={ control }
      rules={ {
        validate: ( value ) => {
          if ( !value ) {
            return true;
          }
          const numeric = parseFloat( removeCommas( value ) );
          if ( isNaN( numeric ) ) return "חובה להזין מספר בלבד";
          return true;
        },
      } }
      render={ ( { field } ) => (
        <TextField
          fullWidth
          autoComplete="off"
          label="תקציב מקסימלי"
          variant="outlined"
          error={ !!formState.errors.max_budget }
          helperText={ formState?.errors?.max_budget?.message || '' }
          value={ formatNumberWithCommas( field.value || "" ) }
          onChange={ ( e ) => {
            const input = e.target.value;
            const numericOnly = removeCommas( input );
            if ( /^\d*$/.test( numericOnly ) ) {
              field.onChange( numericOnly );
            }
          } }
        />
      ) }
    />
  );
};

export {
  MaxBudgetInput
}
