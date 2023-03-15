import "utils/mockMatchMedia";
import { render, screen } from "@testing-library/react";
import NewsDetail from "..";
import useIndex from "../index.hook";

// @start mock
jest.mock("components/ErrorState", () => () => <div>ErrorState</div>);
jest.mock("components/LoadingState", () => () => <div>LoadingState</div>);

jest.mock("../index.hook", () => jest.fn());
const useIndexMock = {
  data: {
    urlToImage: "https://example.com/image.jpg",
    title: "Example News Title",
    author: "Example Author",
    url: "https://example.com",
    publishedAt: "2023-03-15T00:00:00.000Z",
    content: "Example news content.",
    description: "description content",
    source: { id: "123", name: "IDN" },
  },
  loading: false,
  error: false,
};
// @end mock

describe("NewsDetail", () => {
  it("should render NewsDetail with correct data", () => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue(useIndexMock);
    render(<NewsDetail />);
    expect(screen.getByText("Example News Title")).toBeInTheDocument();
    expect(screen.getByText("Author: Example Author")).toBeInTheDocument();
    expect(screen.getByText("https://example.com")).toBeInTheDocument();
    expect(screen.getByText("Example news content.")).toBeInTheDocument();
    expect(screen.getByText("Source: IDN")).toBeInTheDocument();
    expect(screen.getByText("description content")).toBeInTheDocument();
    expect(
      screen.getByAltText("https://example.com/image.jpg")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Published Date: 15 March 2023")
    ).toBeInTheDocument();
  });

  it("should render loading correctly", () => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue({
      ...useIndexMock,
      loading: true,
    });
    render(<NewsDetail />);
    expect(screen.getByText("LoadingState")).toBeInTheDocument();
  });

  it("should render error correctly", () => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue({
      ...useIndexMock,
      error: true,
    });
    render(<NewsDetail />);
    expect(screen.getByText("ErrorState")).toBeInTheDocument();
  });
});
