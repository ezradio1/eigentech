import "utils/mockMatchMedia";
import { fireEvent, render, screen } from "@testing-library/react";
import ModalLogin from "..";
import useIndex from "../index.hook";

// @start mock
jest.mock("components/ErrorState", () => () => <div>ErrorState</div>);
jest.mock("components/LoadingState", () => () => <div>LoadingState</div>);
jest.mock("components/NewsCard", () => () => <div>NewsCard</div>);

jest.mock("../index.hook", () => jest.fn());
const handleLoginMock = jest.fn();
const useIndexMock = {
  loading: false,
  handleLogin: handleLoginMock,
};

const propsMock = {
  title: "Modal Login",
  show: true,
  onCloseModal: jest.fn(),
};
// @end mock

describe("ModalLogin", () => {
  beforeEach(() => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue(useIndexMock);
  });

  it("should render ModalLogin with correct data", () => {
    render(<ModalLogin {...propsMock} />);
    expect(screen.getByText("Modal Login")).toBeInTheDocument();
    expect(screen.getByText("Remember me")).toBeInTheDocument();
  });

  it("shouldn't call handleLogin when press Login Button and input still empty", () => {
    render(<ModalLogin {...propsMock} />);
    const loginBtn = screen.getByText("Login");
    loginBtn.click();
    expect(handleLoginMock).not.toBeCalled();
  });

  it("should updates value when input changes", () => {
    render(<ModalLogin {...propsMock} />);
    const emailInputElement = screen.getByPlaceholderText(
      "Enter your username"
    ) as HTMLInputElement;
    const passwordInputElement = screen.getByPlaceholderText(
      "Enter your password"
    ) as HTMLInputElement;
    fireEvent.change(emailInputElement, { target: { value: "testusername" } });
    fireEvent.change(passwordInputElement, {
      target: { value: "asd123" },
    });
    expect(emailInputElement.value).toBe("testusername");
    expect(passwordInputElement.value).toBe("asd123");
  });
});
