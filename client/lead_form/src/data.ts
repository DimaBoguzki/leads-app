
import type { ForMeTheLead } from './types';
import SvetaPic from './assets/img/sveta.png';
import MotiPic from './assets/img/moti.png';
import EmilPic from './assets/img/emil.png';
import DimaPic from './assets/img/placeholder.png';

const UserInfo: { [ key: string ]: ForMeTheLead } = {
  emil: {
    name: 'אמיל יקואלי',
    phone: '0527222668',
    email: 'emilyakoeli86@gmail.com',
    pic: EmilPic
  },
  sveta: {
    name: 'סבטלנה ארוטיוניאן',
    phone: '0545866706',
    email: 'glumov0307@gmail.com',
    pic: SvetaPic
  },
  moti: {
    name: 'מוטי מרדכי',
    phone: '0545866706',
    email: 'motti589@walla.com',
    pic: MotiPic
  },
  dima: {
    name: 'דימה בוגוצקי',
    phone: '0545866706',
    email: 'dimaboguzki@gmail.com',
    pic: DimaPic
  }
}

export {
  UserInfo
}