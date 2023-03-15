import { render, screen } from "@testing-library/react";
import { USER_LS_KEY } from "constants/key";
import { UserProvider } from "context/UserContext";
import MobileMenu from "../index";

describe("MobileMenu", () => {
  it("should render the menu", () => {
    const handleSearch = jest.fn();
    const handleLogout = jest.fn();
    const handleLogin = jest.fn();
    const handleSignup = jest.fn();
    render(
      <UserProvider>
        <MobileMenu
          handleSearch={handleSearch}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
        />
      </UserProvider>
    );

    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

    localStorage.setItem(
      USER_LS_KEY,
      JSON.stringify({ name: "John", username: "john123", password: "john123" })
    );

    render(
      <UserProvider>
        <MobileMenu
          handleSearch={handleSearch}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
        />
      </UserProvider>
    );
    expect(screen.getByText("Hello,")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();

    const logoutButton = screen.getByText("Logout");
    logoutButton.click();
    expect(handleLogout).toHaveBeenCalled();

    const loginButton = screen.getByText("Login");
    loginButton.click();
    expect(handleLogin).toHaveBeenCalled();

    const signupButton = screen.getByText("Sign Up");
    signupButton.click();
    expect(handleSignup).toHaveBeenCalled();
  });
});
