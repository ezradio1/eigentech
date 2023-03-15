import { renderHook } from "@testing-library/react-hooks";
import { UserProvider, useUserContext } from "../index";

describe("useUserContext", () => {
  it("throws an error when used outside of UserProvider", () => {
    const { result } = renderHook(() => useUserContext());

    expect(result.error).toEqual(
      Error('"useUserContext" must be used within "UserProvider"')
    );
  });

  it("returns the context value when used inside UserProvider", () => {
    const wrapper = ({ children }: any) => (
      <UserProvider>{children}</UserProvider>
    );
    const { result } = renderHook(() => useUserContext(), { wrapper });

    expect(result.current).toEqual({
      loggedUser: null,
      setLoggedUser: expect.any(Function),
    });
  });
});
