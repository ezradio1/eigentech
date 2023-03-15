import { render, screen } from "@testing-library/react";
import Dashboard from "../index";

// start mock
jest.mock("../components/Headlines", () => () => <div>Headline</div>);

describe("Dashboard", () => {
  it("should render Dashboard corectly", () => {
    render(<Dashboard />);
    const text = screen.getByText("Headline");
    expect(text).toBeInTheDocument();
  });
});
