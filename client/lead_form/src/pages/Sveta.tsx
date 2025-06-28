import SvetaPic from '../assets/img/sveta.jpg';
import Form from "../Form";
import Steps from "../components/steps/Steps";
import type { ForMeTheLead } from "../types";

const svetaInfo: ForMeTheLead = {
  name: 'סבטלנה ארוטיוניאן',
  phone: '0545866706',
  email: 'glumov0307@gmail.com',
  pic: SvetaPic
}

function Sveta() {
  return (
    <Form info={ svetaInfo }>
      <Steps />
    </Form>
  )
}
export default Sveta;
