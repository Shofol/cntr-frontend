/* eslint-disable @typescript-eslint/no-unsafe-call */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "~/pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading: HTMLElement = screen.getByRole("heading", {
      level: 1,
      name: /Care you can count on/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
