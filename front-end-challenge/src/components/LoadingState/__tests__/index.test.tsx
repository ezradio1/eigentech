import { render, screen } from "@testing-library/react";
import LoadingState from "../index";

describe("LoadingState", () => {
  it("should render LoadingState corectly", () => {
    render(<LoadingState />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
  });
});
