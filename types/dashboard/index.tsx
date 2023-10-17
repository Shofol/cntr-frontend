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

export type Service = {
  duration: number;
  serviceId: string;
};

export type ProviderType = {
  user_id: string | null;
  first_name: string;
  last_name: string;
  middle_name: string;
  dob: string;
  gender: string;
  phone_number: string | null;
  address_id: string;
  is_test: boolean;
  provider_type: string | null;
  npi_registry_data: string | null;
  id: string;
  resource_id: number;
};

export type ConfirmationModalProps = {
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmFunction: (argument?: unknown) => void;
  cancelFunction: (argument?: unknown) => void;
  isModalOpen: boolean;
};
