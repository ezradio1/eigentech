import { render, screen } from "@testing-library/react";
import FlexLayout from "../index";

describe("FlexLayout", () => {
  it("should render FlexLayout corectly", () => {
    render(<FlexLayout>Render FlexLayout</FlexLayout>);
    const text = screen.getByText("Render FlexLayout");
    expect(text).toBeInTheDocument();
  });
});
