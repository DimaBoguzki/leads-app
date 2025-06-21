import type { UseFormReturn } from "react-hook-form";

type UserInfoLead = {
  firstName: string;
  lastName: string;
  phone: string;
};

type UserLookingFor = {
  city: string;
  area: string[];
  type: string[];
  number_rooms: string[];
  priority: string[];
  max_budget: number;
  other?: string;
}


type FormContext = {
  index: number;
  userInfoForm: UseFormReturn<UserInfoLead, any, UserInfoLead>;
  lookingForForm: UseFormReturn<UserLookingFor, any, UserLookingFor>;
  next: () => void;
  back: () => void;
  reset: () => void;
}


export {
  type FormContext,
  type UserInfoLead,
  type UserLookingFor
}