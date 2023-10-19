export const HouseGroup = ({ current }: { current: string }) => {
  return (
    <g id="House">
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector"
        d="M14.25 19.5V15C14.25 14.8011 14.171 14.6103 14.0303 14.4697C13.8897 14.329 13.6989 14.25 13.5 14.25H10.5C10.3011 14.25 10.1103 14.329 9.96967 14.4697C9.82902 14.6103 9.75 14.8011 9.75 15V19.5C9.75 19.6989 9.67098 19.8897 9.53033 20.0303C9.38968 20.171 9.19891 20.25 9 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V10.8281C3.75168 10.7243 3.77411 10.6219 3.81597 10.5269C3.85783 10.432 3.91828 10.3463 3.99375 10.275L11.4937 3.45939C11.632 3.33291 11.8126 3.26276 12 3.26276C12.1874 3.26276 12.368 3.33291 12.5062 3.45939L20.0062 10.275C20.0817 10.3463 20.1422 10.432 20.184 10.5269C20.2259 10.6219 20.2483 10.7243 20.25 10.8281V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H15C14.8011 20.25 14.6103 20.171 14.4697 20.0303C14.329 19.8897 14.25 19.6989 14.25 19.5Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};

export const AppointmentGroup = ({ current }: { current: string }) => {
  return (
    <g id="CalendarBlank">
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector"
        d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_2"
        d="M16.5 2.25V5.25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_3"
        d="M7.5 2.25V5.25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_4"
        d="M3.75 8.25H20.25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};

export const MessagesGroup = ({ current }: { current: string }) => {
  return (
    <g id="ChatText">
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector"
        d="M7.3125 18.8719L4.22812 21.4594C4.11886 21.5498 3.9862 21.6074 3.84553 21.6254C3.70486 21.6435 3.56195 21.6213 3.43338 21.5615C3.30481 21.5016 3.19585 21.4065 3.11914 21.2872C3.04244 21.1679 3.00112 21.0293 3 20.8875V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H20.25C20.4489 5.25 20.6397 5.32902 20.7803 5.46967C20.921 5.61032 21 5.80109 21 6V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H7.65937L7.3125 18.8719Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_2"
        d="M9 10.5H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_3"
        d="M9 13.5H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};

export const UsersGroup = ({ current }: { current: string }) => {
  return (
    <g id="UsersThree">
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector"
        d="M12 16.875C14.0711 16.875 15.75 15.1961 15.75 13.125C15.75 11.0539 14.0711 9.375 12 9.375C9.92893 9.375 8.25 11.0539 8.25 13.125C8.25 15.1961 9.92893 16.875 12 16.875Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_2"
        d="M18.375 10.875C19.2485 10.8735 20.1103 11.0762 20.8916 11.4669C21.6729 11.8575 22.3521 12.4253 22.875 13.125"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_3"
        d="M1.125 13.125C1.64794 12.4253 2.32714 11.8575 3.10843 11.4669C3.88972 11.0762 4.75149 10.8735 5.625 10.875"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_4"
        d="M6.59961 20.25C7.09351 19.2385 7.86156 18.3861 8.81628 17.7898C9.77099 17.1935 10.874 16.8774 11.9996 16.8774C13.1252 16.8774 14.2282 17.1935 15.1829 17.7898C16.1377 18.3861 16.9057 19.2385 17.3996 20.25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_5"
        d="M5.62512 10.875C5.05572 10.8756 4.49791 10.7141 4.01688 10.4094C3.53585 10.1048 3.15145 9.6695 2.9086 9.15449C2.66576 8.63947 2.57449 8.06598 2.64547 7.50102C2.71645 6.93607 2.94675 6.40298 3.30945 5.96404C3.67215 5.52511 4.15227 5.19845 4.69372 5.02225C5.23517 4.84605 5.81558 4.82758 6.36714 4.96899C6.9187 5.11041 7.41862 5.40587 7.8085 5.82085C8.19838 6.23583 8.4621 6.7532 8.56887 7.3125"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_6"
        d="M15.4316 7.3125C15.5384 6.7532 15.8021 6.23583 16.192 5.82085C16.5819 5.40587 17.0818 5.11041 17.6334 4.96899C18.1849 4.82758 18.7653 4.84605 19.3068 5.02225C19.8482 5.19845 20.3284 5.52511 20.6911 5.96404C21.0538 6.40298 21.2841 6.93607 21.355 7.50102C21.426 8.06598 21.3347 8.63947 21.0919 9.15449C20.8491 9.6695 20.4647 10.1048 19.9836 10.4094C19.5026 10.7141 18.9448 10.8756 18.3754 10.875"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};

export const ResourcesGroup = ({ current }: { current: string }) => {
  return (
    <g id="FileSearch">
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector"
        d="M18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25L19.5 8.25V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_2"
        d="M14.25 3V8.25H19.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_3"
        d="M13.4814 15.7313L14.9814 17.2313"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector_4"
        d="M11.625 16.5C13.0747 16.5 14.25 15.3247 14.25 13.875C14.25 12.4253 13.0747 11.25 11.625 11.25C10.1753 11.25 9 12.4253 9 13.875C9 15.3247 10.1753 16.5 11.625 16.5Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};

export const InsuranceGroup = ({ current }: { current: string }) => {
  return (
    <g id="FirstAid">
      <path
        className={"group-hover:stroke-br-dark " + current}
        id="Vector"
        d="M9 15H3.75C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V9.75C3 9.55109 3.07902 9.36032 3.21967 9.21967C3.36032 9.07902 3.55109 9 3.75 9H9V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V9H20.25C20.4489 9 20.6397 9.07902 20.7803 9.21967C20.921 9.36032 21 9.55109 21 9.75V14.25C21 14.4489 20.921 14.6397 20.7803 14.7803C20.6397 14.921 20.4489 15 20.25 15H15V20.25C15 20.4489 14.921 20.6397 14.7803 20.7803C14.6397 20.921 14.4489 21 14.25 21H9.75C9.55109 21 9.36032 20.921 9.21967 20.7803C9.07902 20.6397 9 20.4489 9 20.25V15Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};
