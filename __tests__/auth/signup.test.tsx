/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "~/pages/auth/signup";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Sign up page", () => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  it("checking the required parameter", () => {
    render(<SignUp />);

    fireEvent.click(screen.getByRole("button", { name: /create account/i }));
    expect(getEmail()).toBeInvalid();
    expect(getPassword()).toBeInvalid();
  });

  it("checking the valid input", () => {
    render(<SignUp />);
    const password = getPassword();
    const testPassword = "1234567890";
    const testEmail = "example@gmail.com";

    fireEvent.click(screen.getByRole("button", { name: /create account/i }));
    expect(new RegExp(getEmail().pattern).test(testEmail)).toBeTruthy();
    expect(password.minLength).toBeLessThanOrEqual(testPassword.length);
  });

  // await userEvent.type(email, "example");
});

const getEmail = (): HTMLInputElement => {
  return screen.getByRole("textbox", {
    name: /email/i,
  });
};

const getPassword = (): HTMLInputElement => {
  return screen.getByLabelText(/password/i);
};
