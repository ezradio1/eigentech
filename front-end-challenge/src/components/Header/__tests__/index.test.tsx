import { render, screen } from "@testing-library/react";
import { USER_LS_KEY } from "constants/key";
import { UserProvider } from "context/UserContext";
import useResponsive from "hooks/useResponsive";
import Header from "../index";
import { MODAL_LOGIN, MODAL_SIGNUP } from "../index.constants";
import useIndex from "../index.hook";

// @start mock
jest.mock("components/ModalLogin", () => () => <div>ModalLogin</div>);
jest.mock("components/ModalSignUp", () => () => <div>ModalSignUp</div>);

jest.mock("../index.hook", () => jest.fn());
const setModalMock = jest.fn();
const handleLogoutMock = jest.fn();
const useIndexMock = {
  handleSearch: jest.fn(),
  modal: "",
  setModal: setModalMock,
  handleLogout: handleLogoutMock,
  loading: false,
  handleClickLogo: jest.fn(),
};

jest.mock("hooks/useResponsive", () => jest.fn());
const useResponsiveMock = {
  isMobile: false,
};
// @end mock

describe("Header", () => {
  beforeEach(() => {
    const mockUseCustomHook = useResponsive as jest.MockedFunction<
      typeof useResponsive
    >;
    mockUseCustomHook.mockReturnValue(useResponsiveMock);
    const mockUseIndexHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseIndexHook.mockReturnValue(useIndexMock);
  });
  it("should render the menu", () => {
    render(
      <UserProvider>
        <Header />
      </UserProvider>
    );

    expect(screen.getByText("EIGEN NEWS")).toBeInTheDocument();
  });

  it("should open ModalLogin when click Login button", () => {
    render(
      <UserProvider>
        <Header />
      </UserProvider>
    );

    const loginBtn = screen.getByText("Login");
    loginBtn.click();
    expect(setModalMock).toBeCalledWith(MODAL_LOGIN);
    expect(screen.getByText("ModalLogin")).toBeInTheDocument();
  });

  it("should open ModalSignUp when click SignUp button", () => {
    render(
      <UserProvider>
        <Header />
      </UserProvider>
    );

    const signUpBtn = screen.getByText("Sign Up");
    signUpBtn.click();
    expect(setModalMock).toBeCalledWith(MODAL_SIGNUP);
    expect(screen.getByText("ModalSignUp")).toBeInTheDocument();
  });

  it("should show name when user is logged in", () => {
    localStorage.setItem(
      USER_LS_KEY,
      JSON.stringify({ name: "John", username: "john123", password: "john123" })
    );
    render(
      <UserProvider>
        <Header />
      </UserProvider>
    );

    expect(screen.getByText("Hello,")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("should logout when click Logout button", () => {
    localStorage.setItem(
      USER_LS_KEY,
      JSON.stringify({ name: "John", username: "john123", password: "john123" })
    );
    render(
      <UserProvider>
        <Header />
      </UserProvider>
    );

    const logoutBtn = screen.getByText("Logout");
    logoutBtn.click();
    expect(handleLogoutMock).toBeCalled();
  });
});
