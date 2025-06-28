import { useFormContext } from "../../context/formContext";
import { DisplayStep } from "../DisplayStep";

function Steps() {
  const context = useFormContext();
  return (
    <DisplayStep index={ context.index } />
  )
}

export default Steps;