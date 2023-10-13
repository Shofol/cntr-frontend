export type AppointmentAd = {
  title: string;
  description: string;
  src: string;
  buttonText: string;
  link: string;
  linkText: string;
};

export type ZoomClientConfig = {
  authEndpoint: string;
  sdkKey: string;
  signature: string;
  meetingNumber: string;
  passWord: string;
  role: number;
  userName: string;
  userEmail: string;
};
