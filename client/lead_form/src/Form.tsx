
import Steps from "./components/steps/Steps";
import { FormProvider } from "./context/formContext";
import type { ForMeTheLead } from "./types";

function FormProviderData( { children, info }: { children: React.ReactNode; info: ForMeTheLead } ) {
  return (
    <FormProvider info={ info }>
      { children }
    </FormProvider>
  )
}



function Form( { info }: { info: ForMeTheLead } ) {
  return (
    <FormProviderData info={ info }>
      <Steps />
    </FormProviderData>
  )
}

export default Form;