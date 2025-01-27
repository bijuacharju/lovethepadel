interface EventCardProps {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  deadline: string;
  address: string;
  startDate: string;
}

interface LocationCardProps {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  address: string;
}

interface IMembershipData {
  title: string;
  hasCrown?: boolean;
  subTitle: string;
  price: string;
  priceOptional?: string;
  buttonText: string;
  onButtonClick?: VoidFunction;
  features: string[];
}

interface ITestimonialData {
  id: number;
  image: string;
  name: string;
  quote: string;
  rating: number;
}

interface IRegisterPlayerDetail {
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
  shirtSize: string;
  shortSize: string;
  initial: string;
}

interface IRegisterTeamForm {
  preferredDay: string;
  playerOne: IRegisterPlayerDetail;
  playerTwo: IRegisterPlayerDetail;
}

export type {
  EventCardProps,
  LocationCardProps,
  IMembershipData,
  ITestimonialData,
  IRegisterPlayerDetail,
  IRegisterTeamForm,
};
