import { render, screen } from "@testing-library/react";
import { type AxiosInstance } from "axios";
import Booking from "~/pages/dashboard/scheduling/booking";
import api from "~/utils/axios";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      email: "test@example.com",
      res: "resourceId",
      serv: "serviceId",
      provider: "providerId",
    },
  }),
}));

// jest.mock("next/script", () => ({ __esModule: true, Script: jest.fn() }));

const mockOnSched = jest.fn();
window.OnSched = mockOnSched;

describe("Booking Component", () => {
  let axiosInstance: AxiosInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    axiosInstance = api;
    axiosInstance.get = jest.fn();
  });

  it("renders Booking component", async () => {
    render(<Booking />);
    expect(screen.getByTestId("availability")).toBeInTheDocument();
    expect(screen.getByTestId("onsched-script").src).toEqual(
      "https://js.onsched.com/1.0.0/",
    );
  });
});
