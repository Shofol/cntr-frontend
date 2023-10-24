/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
// import { useRouter } from "next/router";
import Home from "~/pages";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Home", () => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  it("renders a heading", () => {
    render(<Home />);

    const heading: HTMLElement = screen.getByRole("heading", {
      level: 1,
      name: /Care you can count on/i,
    });

    const signInButton: HTMLButtonElement = screen.getByText("Log in");
    expect(signInButton).toBeInTheDocument();
    fireEvent.click(signInButton);
    expect(router.push).toHaveBeenCalledWith("/auth/signin");

    expect(heading).toBeInTheDocument();
  });
});
