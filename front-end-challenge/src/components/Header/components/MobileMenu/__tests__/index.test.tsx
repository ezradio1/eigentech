import { render, screen } from "@testing-library/react";
import { USER_LS_KEY } from "constants/key";
import { UserProvider } from "context/UserContext";
import MobileMenu from "../index";
import useIndex from "../index.hook";

// @start mock
jest.mock("../index.hook", () => jest.fn());
const handleActionMock = jest.fn();
const useIndexMock = {
  visible: true,
  setVisible: jest.fn(),
  handleAction: handleActionMock,
};

const handleSearchMock = jest.fn();
const handleLogoutMock = jest.fn();
const handleLoginMock = jest.fn();
const handleSignupMock = jest.fn();
// @end mock

describe("MobileMenu", () => {
  beforeEach(() => {
    const mockUseIndexHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseIndexHook.mockReturnValue(useIndexMock);
  });

  it("should render the menu", () => {
    render(
      <UserProvider>
        <MobileMenu
          handleSearch={handleSearchMock}
          handleLogout={handleLogoutMock}
          handleLogin={handleLoginMock}
          handleSignup={handleSignupMock}
        />
      </UserProvider>
    );

    expect(screen.getByText("Menu")).toBeInTheDocument();

    localStorage.removeItem(USER_LS_KEY);
    const mockUseIndexHook = useIndex as jest.MockedFunction<typeof useIndex>;
    mockUseIndexHook.mockReturnValue({ ...useIndexMock, visible: true });
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

    localStorage.setItem(
      USER_LS_KEY,
      JSON.stringify({ name: "John", username: "john123", password: "john123" })
    );

    render(
      <UserProvider>
        <MobileMenu
          handleSearch={handleSearchMock}
          handleLogout={handleLogoutMock}
          handleLogin={handleLoginMock}
          handleSignup={handleSignupMock}
        />
      </UserProvider>
    );
    expect(screen.getByText("Hello,")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();

    const logoutButton = screen.getByText("Logout");
    logoutButton.click();
    expect(handleActionMock).toHaveBeenCalledWith(handleLogoutMock);

    const loginButton = screen.getByText("Login");
    loginButton.click();
    expect(handleActionMock).toHaveBeenCalledWith(handleLoginMock);

    const signupButton = screen.getByText("Sign Up");
    signupButton.click();
    expect(handleActionMock).toHaveBeenCalledWith(handleSignupMock);
  });
});
