import {
    AppointmentGroup,
    HouseGroup,
    InsuranceGroup,
    MessagesGroup,
    ResourcesGroup,
    UsersGroup,
} from "public/icons";

export const baseURL = `https://api.mycontourhealth.com/api/`;
export const  navigation = [
    {
      name: "Home",
      href: "/dashboard/scheduling",
      icon: HouseGroup,
      current: true,
    },
    {
      name: "Appointments",
      href: "#",
      icon: AppointmentGroup,
      current: false,
    },
    { name: "Messages", href: "#", icon: MessagesGroup, current: false },
    {
      name: "Your Providers",
      href: "#",
      icon: UsersGroup,
      current: false,
    },
    {
      name: "Resources",
      href: "#",
      icon: ResourcesGroup,
      current: false,
    },
    { name: "Insurance", href: "#", icon: InsuranceGroup, current: false },
  ];