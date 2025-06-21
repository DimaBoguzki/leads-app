import { createContext, useCallback, useContext, useState } from 'react';
import type { FormContext, UserInfoLead, UserLookingFor } from '../types';
import { useForm } from 'react-hook-form';

const FormContext = createContext<FormContext>( {
  index: 0,
  userInfoForm: {} as any,
  lookingForForm: {} as any,
  next: () => void 0,
  back: () => void 0,
  reset: () => void 0
} );

const useFormContext = () => useContext( FormContext );


function FormProvider( { children }: { children: React.ReactNode } ) {
  const [ index, setIndex ] = useState<number>( 0 );

  const next = useCallback( () => setIndex( prev => prev + 1 ), [ setIndex ] );
  const back = useCallback( () => setIndex( prev => prev === 0 ? 0 : prev - 1 ), [] );

  const userInfoForm = useForm<UserInfoLead>();
  const lookingForForm = useForm<UserLookingFor>( {
    defaultValues: {
      area: [],
      type: [],
      number_rooms: [],
      priority: []
    }
  } );

  const reset = useCallback( () => {
    userInfoForm.reset();
    lookingForForm.reset();
  }, [ userInfoForm, lookingForForm ] );

  return (
    <FormContext.Provider value={ { index, userInfoForm, lookingForForm, next, back, reset } }>
      { children }
    </FormContext.Provider>
  );
}

export {
  FormProvider,
  useFormContext
}