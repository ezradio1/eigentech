import { render, screen } from "@testing-library/react";
import NewsCard from "../index";

// @start mock
const onClickMock = jest.fn();
const propsMock = {
  urlToImage: "urlToImage",
  title: "title of news",
  author: "author of news",
  publishedAt: String(new Date("03/15/2023")),
  sourceName: "sourceName",
  content: "lorem ipsum dolor si amet",
  onClick: onClickMock,
};

describe("NewsCard", () => {
  it("should render NewsCard corectly", () => {
    render(<NewsCard {...propsMock} />);
    expect(screen.getByText(propsMock.title)).toBeInTheDocument();
    expect(screen.getByText(propsMock.author)).toBeInTheDocument();
    expect(screen.getByText(propsMock.content)).toBeInTheDocument();
    expect(
      screen.getByText(`15 March 2023 - ${propsMock.sourceName}`)
    ).toBeInTheDocument();
  });
});
