
import { FormProvider } from "./context/formContext";
import type { ForMeTheLead } from "./types";

function Form( { children, info }: { children: React.ReactNode; info: ForMeTheLead } ) {
  return (
    <FormProvider info={ info }>
      { children }
    </FormProvider>
  )
}

export default Form;