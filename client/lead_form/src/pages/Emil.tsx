import type { ForMeTheLead } from "../types";
import EmilPic from '../assets/img/emil.png';
import Form from "../Form";
import Steps from "../components/steps/Steps";

const emilInfo: ForMeTheLead = {
  name: 'אמיל יקואלי',
  phone: '0527222668',
  email: 'emilyakoeli86@gmail.com',
  pic: EmilPic
}

function Emil() {
  return (
    <Form info={ emilInfo }>
      <Steps />
    </Form>
  )
}


export default Emil;
