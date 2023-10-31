/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

import { act, fireEvent, render, screen } from "@testing-library/react";
import { type AxiosInstance } from "axios";
import Appointment from "~/pages/dashboard/scheduling/appointment";
import api from "~/utils/axios";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

const mockProviders = [
  {
    user_id: null,
    first_name: "RAZVAN",
    last_name: "GOSMAN",
    middle_name: "I",
    dob: "2005-12-19",
    gender: "MALE",
    phone_number: null,
    address_id: "e537d46d-80a2-4b7b-a610-616809cb5c0a",
    is_test: false,
    provider_type: null,
    npi_registry_data: null,
    id: "f3822873-db67-4f4d-8b4f-b19ce2ba179e",
  },
];

const mockSuccessResponse = { data: mockProviders };

describe("Appointment Component", () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = api;
  });

  beforeEach(() => {
    axiosInstance.get = jest.fn();
    axiosInstance.get.mockResolvedValue(mockSuccessResponse);
  });

  afterEach(() => {
    axiosInstance.get.mockRestore();
  });

  it("renders the appointment component properly", async () => {
    render(<Appointment />);

    expect(screen.getByText("Meet with your care team")).toBeInTheDocument();

    await act(async () => {
      expect(axiosInstance.get).toHaveBeenCalledWith("providers/providers");
    });

    expect(screen.getByTestId("15-min")).toBeInTheDocument();
    expect(screen.getByTestId("30-min")).toBeInTheDocument();
    expect(screen.getByTestId("60-min")).toBeInTheDocument();

    mockProviders.forEach((provider) => {
      expect(
        screen.getByText(`${provider.first_name} ${provider.last_name}`),
      ).toBeInTheDocument();
    });
  });

  it("navigates when a provider and resource is selected", async () => {
    render(<Appointment />);

    await act(async () => {
      expect(axiosInstance.get).toHaveBeenCalledWith("providers/providers");
    });

    fireEvent.click(screen.getByTestId("15-min"));
    fireEvent.click(screen.getByText("RAZVAN GOSMAN"));

    expect(require("next/router").useRouter().push).toHaveBeenCalledWith(
      "/dashboard/scheduling/booking?serv=283730&res=236742&email=frontend@mycontourhealth.com&provider=f3822873-db67-4f4d-8b4f-b19ce2ba179e",
    );
  });
});
