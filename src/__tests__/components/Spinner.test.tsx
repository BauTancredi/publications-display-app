import { render } from "@testing-library/react";

import Spinner from "../../components/Spinner";

describe("Spinner component", () => {
  it("renders the spinner", () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector(".animate-spin");

    expect(spinner).toBeInTheDocument();
  });

  it("renders the spinner with the correct color", () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector(".border-yellow-500");

    expect(spinner).toBeInTheDocument();
  });

  it("has the correct classes", () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector(".animate-spin");

    expect(spinner).toHaveClass(
      "w-12",
      "h-12",
      "rounded-full",
      "animate-spin",
      "border",
      "border-solid",
      "border-yellow-500",
      "border-t-transparent",
    );
  });
});
