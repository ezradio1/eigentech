import { USER_LS_KEY } from "constants/key";
import { createContext, useContext, useState } from "react";

import type { UserContextValue, UserProviderProps } from "./index.types";

const UserContext = createContext<UserContextValue | undefined>(undefined);

const UserProvider = ({ children }: UserProviderProps) => {
  const getUserFromLs = localStorage.getItem(USER_LS_KEY) || "";
  const [loggedUser, setLoggedUser] = useState(
    getUserFromLs ? JSON.parse(getUserFromLs) : null
  );

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(`"useUserContext" must be used within "UserProvider"`);
  }

  return context;
};

export { UserProvider, useUserContext };
