/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "~/pages/auth/signin";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const onsubmit = jest.fn();
describe("Sign in page", () => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  it("checking the signin process", async () => {
    render(<SignIn />);
    const email: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    const password: HTMLInputElement = screen.getByLabelText(/password/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    await userEvent.type(email, "example@gmail.com");
    await userEvent.type(password, "1234567890");

    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }));
    // expect(onsubmit).toBeCalled();
    // expect(handleSignIn).toBeCalled();
  });
});
