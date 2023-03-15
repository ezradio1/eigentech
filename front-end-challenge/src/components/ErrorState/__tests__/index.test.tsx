import { render, screen } from "@testing-library/react";
import ErrorState from "../index";

describe("ErrorState", () => {
  it("should render ErrorState corectly", () => {
    render(<ErrorState />);
    expect(
      screen.getByText("An error occurred on the server")
    ).toBeInTheDocument();
    expect(screen.getByText("Please try again later")).toBeInTheDocument();
  });
});
