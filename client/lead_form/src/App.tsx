import { DisplayStep } from './components/DisplayStep'
import { useFormContext } from './context/formContext';



function App() {
  const context = useFormContext()
  return (
    <DisplayStep index={context.index} />
  )
}

export default App
