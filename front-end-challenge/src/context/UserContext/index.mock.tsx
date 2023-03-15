import React, { createContext } from "react";
import { UserContextValue, UserProviderProps } from "./index.types";

export const mockUserContext: UserContextValue = {
  loggedUser: {
    name: "Ezra",
    username: "ezra323",
    password: "asdasd",
  },
  setLoggedUser: jest.fn(),
};

export const UserContext = createContext<UserContextValue>(mockUserContext);

export const useUserContext = jest.fn(() => mockUserContext);

const UserProvider = ({ children }: UserProviderProps) => (
  <UserContext.Provider value={mockUserContext}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
