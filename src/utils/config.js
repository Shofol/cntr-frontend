import {
  AppointmentGroup,
  HouseGroup,
  InsuranceGroup,
  MessagesGroup,
  ResourcesGroup,
  UsersGroup,
} from "../../public/icons";

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
      href: "/dashboard/appointments",
      icon: AppointmentGroup,
      current: false,
    },
    { name: "Messages", href: "/dashboard/messaging", icon: MessagesGroup, current: false },
    {
      name: "Your Providers",
      href: "/dashboard/providers",
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

  export const TopBarNavigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];