/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

import { act, render, screen } from "@testing-library/react";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import { type AxiosInstance } from "axios";
import Meeting from "~/pages/dashboard/scheduling/meeting";
import api from "~/utils/axios";

// mocks
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      meetingNumber: "123456",
      password: "password123",
      userName: "John Doe",
    },
  }),
}));

jest.mock("next-auth/react", () => ({
  getSession: jest.fn(() =>
    Promise.resolve({ accessToken: "mockAccessToken" }),
  ),
}));

jest.mock("@zoomus/websdk/embedded", () => {
  const mockInit = jest.fn(); // Mock the init method
  const mockJoin = jest.fn(); // Mock the join method
  const mZoomMtgEmbedded = {
    createClient: jest.fn(() => ({
      init: mockInit,
      join: mockJoin,
    })),
  };

  return {
    __esModule: true,
    default: mZoomMtgEmbedded,
  };
});

// Mocking global properties and functions
Object.defineProperty(global, "location", {
  value: { reload: jest.fn() },
});

Object.defineProperty(global, "crossOriginIsolated", {
  value: true, // Simulating a scenario where crossOriginIsolated is enabled
  configurable: true,
});

// mock response values
const mockSuccessResponse = { data: null };

const mockSignatureSuccessResponse = {
  data: { signature: "mockSignature" },
  json: jest.fn().mockResolvedValue({ signature: "mockSignature" }),
};

describe("Meeting Component", () => {
  let axiosInstance: AxiosInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    axiosInstance = api;
    axiosInstance.get = jest.fn();
    axiosInstance.post = jest.fn();
    axiosInstance.get.mockResolvedValue(mockSuccessResponse);
    axiosInstance.post.mockResolvedValue(mockSignatureSuccessResponse);
    render(<Meeting />);
  });

  it("renders meeting sucessfully", async () => {
    expect(screen.getByTestId("meetingSDK")).toBeInTheDocument();
    expect(screen.getByTestId("meetingChat")).toBeInTheDocument();

    if (!global.crossOriginIsolated) {
      expect(global.location.reload).toHaveBeenCalled();
    }
  });

  it("fetches token", async () => {
    await act(async () => {
      expect(axiosInstance.get).toHaveBeenCalledWith("zoom/token");
    });
  });

  it("fetches signature", async () => {
    await act(async () => {
      expect(axiosInstance.post).toHaveBeenCalledWith(
        "https://kempsey-wallaby-dmpe.2.us-1.fl0.io",
        {
          meetingNumber: "123456",
          role: 0,
        },
      );
    });
  });

  it("initilaizes Meeting", async () => {
    const clientMock = ZoomMtgEmbedded.createClient();

    expect(clientMock.init).toHaveBeenCalledWith({
      zoomAppRoot: screen.getByTestId("meetingSDK"),
      language: "en-US",
      customize: {
        video: {
          isResizable: true,
          popper: {
            disableDraggable: true,
          },
          defaultViewType: "gallery",
          viewSizes: {
            default: {
              width: 900,
              height: 200,
            },
            ribbon: {
              width: 700,
              height: 200,
            },
          },
        },
        chat: {
          popper: {
            disableDraggable: true,
            anchorElement: screen.getByTestId("meetingChat"),
            placement: "top",
          },
        },
      },
    });
  });

  it("joins meeting", async () => {
    const clientMock = ZoomMtgEmbedded.createClient();
    expect(clientMock.join).toBeCalledWith({
      signature: "mockSignature",
      sdkKey: process.env.NEXT_PUBLIC_ZOOM_SDK_KEY,
      meetingNumber: "123456",
      password: "password123",
      userName: "John Doe",
    });
  });
});
