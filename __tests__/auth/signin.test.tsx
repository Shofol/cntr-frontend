/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "~/pages/auth/signin";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const onsubmit = jest.fn();

describe("Sign in page", () => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  it("checking the required parameter", () => {
    render(<SignIn />);

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
    expect(getEmail()).toBeInvalid();
    expect(getPassword()).toBeInvalid();
  });

  it("checking the valid input", () => {
    render(<SignIn />);
    const password = getPassword();
    const testPassword = "1234567890";
    const testEmail = "example@gmail.com";

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
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
