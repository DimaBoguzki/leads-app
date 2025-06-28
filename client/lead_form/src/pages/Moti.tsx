import type { ForMeTheLead } from "../types";
import MotiPic from '../assets/img/moti.jpg';
import Form from "../Form";
import Steps from "../components/steps/Steps";

const motiInfo: ForMeTheLead = {
  name: 'מוטי מרדכי',
  phone: '0547882307',
  email: 'emilyakoeli86@gmail.com',
  pic: MotiPic
}

function Moti() {
  return (
    <Form info={ motiInfo }>
      <Steps />
    </Form>
  )
}


export default Moti;
