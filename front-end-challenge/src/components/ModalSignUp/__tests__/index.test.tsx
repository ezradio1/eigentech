import "utils/mockMatchMedia";
import { fireEvent, render, screen } from "@testing-library/react";
import ModalSignUp from "..";
import useIndex from "../index.hook";

// @start mock
jest.mock("components/ErrorState", () => () => <div>ErrorState</div>);
jest.mock("components/LoadingState", () => () => <div>LoadingState</div>);
jest.mock("components/NewsCard", () => () => <div>NewsCard</div>);

jest.mock("../index.hook", () => jest.fn());
const handleSignUpMock = jest.fn();
const useIndexMock = {
  loading: false,
  handleSignUp: handleSignUpMock,
};

const propsMock = {
  title: "Modal SignUp",
  show: true,
  onCloseModal: jest.fn(),
};
// @end mock

describe("ModalSignUp", () => {
  beforeEach(() => {
    const mockUseCustomHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseCustomHook.mockReturnValue(useIndexMock);
  });

  it("should render ModalSignUp with correct data", () => {
    render(<ModalSignUp {...propsMock} />);
    expect(screen.getByText("Modal SignUp")).toBeInTheDocument();
  });

  it("shouldn't call handleSignUp when press SignUp Button and input still empty", () => {
    render(<ModalSignUp {...propsMock} />);
    const signUpBtn = screen.getByText("Sign Up");
    signUpBtn.click();
    expect(handleSignUpMock).not.toBeCalled();
  });

  it("should updates value when input changes", () => {
    render(<ModalSignUp {...propsMock} />);
    const nameInputElement = screen.getByPlaceholderText(
      "Enter your fullname"
    ) as HTMLInputElement;
    const usernameInputElement = screen.getByPlaceholderText(
      "Enter your username"
    ) as HTMLInputElement;
    const passwordInputElement = screen.getByPlaceholderText(
      "Enter your password"
    ) as HTMLInputElement;
    fireEvent.change(nameInputElement, { target: { value: "jhon" } });
    fireEvent.change(usernameInputElement, {
      target: { value: "testusername" },
    });
    fireEvent.change(passwordInputElement, {
      target: { value: "asd123" },
    });
    expect(nameInputElement.value).toBe("jhon");
    expect(usernameInputElement.value).toBe("testusername");
    expect(passwordInputElement.value).toBe("asd123");
  });
});
