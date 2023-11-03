import {
  createEvent,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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

const scriptLoaded = true;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ token: { token: { access_token: "mockToken" } } }),
  }),
);

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

    const setAvailablitiy = jest.fn();

    await waitFor(() =>
      expect(document.querySelector("#onsched-container")).toBeInTheDocument(),
    );

    const router = { query: { email: "testEmail" } }; // Sample router.query value

    const elAvailability = screen.getByTestId("availability");
    const yourEventData = {};

    // expect(document.querySelector("#available-times-row")).toBeInTheDocument();

    const bookingEvent = createEvent("bookingConfirmation", elAvailability, {
      detail: { yourEventData },
    });
    fireEvent(elAvailability, bookingEvent);

    // expect(fetch).toHaveBeenCalled();
    // expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
    // fireEvent.click(screen.getByTestId("cancel-button"));
    // expect(axios.put).toHaveBeenCalledWith("/api/onsched/cancel-appointment", {
    //   // id: "appointment.detail.id",
    //   token: "mockToken",
    // });
  });
});
