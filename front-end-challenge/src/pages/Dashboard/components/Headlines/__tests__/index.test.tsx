import "utils/mockMatchMedia";
import { render, screen } from "@testing-library/react";
import Headlines from "..";
import useIndex from "../index.hook";

// @start mock
jest.mock("components/ErrorState", () => () => <div>ErrorState</div>);
jest.mock("components/LoadingState", () => () => <div>LoadingState</div>);
jest.mock("components/NewsCard", () => () => <div>NewsCard</div>);

jest.mock("../index.hook", () => jest.fn());
const useIndexMock = {
  data: {
    status: "ok",
    totalResults: 25,
    articles: [
      {
        urlToImage: "https://example.com/image.jpg",
        title: "Example News Title",
        author: "Example Author",
        url: "https://example.com",
        publishedAt: "2023-03-15T00:00:00.000Z",
        content: "Example news content.",
        description: "description content",
        source: { id: "123", name: "IDN" },
      },
      {
        urlToImage: "https://example.com/image2.jpg",
        title: "Example News Title2",
        author: "Example Author2",
        url: "https://example2.com",
        publishedAt: "2023-03-15T00:00:00.000Z",
        content: "Example news content.2",
        description: "description content2",
        source: { id: "123", name: "IDN2" },
      },
    ],
  },
  loading: false,
  error: null,
  handleClickNews: jest.fn(),
};
// @end mock

describe("Headlines", () => {
  it("should render Headlines with correct data", () => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue(useIndexMock);
    render(<Headlines />);
    expect(screen.getByText("HEADLINE")).toBeInTheDocument();
    expect(screen.getAllByText("Example News Title")).toHaveLength(2);
    expect(
      screen.getByText("Example Author - 15 March 2023 - IDN")
    ).toBeInTheDocument();
    expect(screen.getByText("Other Top News")).toBeInTheDocument();
    expect(screen.getByText("NewsCard")).toBeInTheDocument();
  });

  it("should render loading correctly", () => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue({
      ...useIndexMock,
      loading: true,
    });
    render(<Headlines />);
    expect(screen.getByText("LoadingState")).toBeInTheDocument();
  });

  it("should render error correctly", () => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue({
      ...useIndexMock,
      error: new Error(),
    });
    render(<Headlines />);
    expect(screen.getByText("ErrorState")).toBeInTheDocument();
  });
});
