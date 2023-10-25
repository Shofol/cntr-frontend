/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "~/pages";
import { TopBarNavigation } from "~/utils/config";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Home", () => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  it("checking the navbar", () => {
    render(<Home />);

    const signInButton: HTMLButtonElement = screen.getByText("Log in");
    expect(signInButton).toBeInTheDocument();
    fireEvent.click(signInButton);
    expect(router.push).toHaveBeenCalledWith("/auth/signin");

    const signUpButton: HTMLButtonElement = screen.getByText("Sign up");
    expect(signUpButton).toBeInTheDocument();
    fireEvent.click(signUpButton);
    expect(router.push).toHaveBeenCalledWith("/auth/signup");

    TopBarNavigation.map((item) => {
      const link: HTMLAnchorElement = screen.getByText(item.name);
      expect(link.href).toContain(item.href);
    });
  });
});
