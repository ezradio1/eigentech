import { render, screen } from "@testing-library/react";
import NoImage from "../index";

describe("NoImage", () => {
  it("should render NoImage corectly", () => {
    render(<NoImage />);
    const image = screen.getByAltText("article");
    expect(image).toBeVisible();
  });
});
