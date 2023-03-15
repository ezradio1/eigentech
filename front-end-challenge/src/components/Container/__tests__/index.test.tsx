import { render, screen } from "@testing-library/react";
import Container from "../index";

describe("Container", () => {
  it("should render Container corectly", () => {
    render(<Container>Render Container</Container>);
    const text = screen.getByText("Render Container");
    expect(text).toBeInTheDocument();
  });
});
