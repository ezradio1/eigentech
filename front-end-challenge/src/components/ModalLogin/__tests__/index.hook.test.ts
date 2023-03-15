import { USER_LS_KEY } from 'constants/key'
import { renderHook } from '@testing-library/react-hooks'
import { useUserContext } from 'context/UserContext'
import { act } from 'react-dom/test-utils'
import useIndex from '../index.hook'

jest.mock('context/UserContext', () => ({
  useUserContext: jest.fn(),
}))

const setLoggedInUserMock = jest.fn()
const useUserContextMock = {
  loggedUser: {
    name: 'john',
    username: 'jhon123',
    password: '123',
  },
  setLoggedUser: setLoggedInUserMock(),
}

const onCloseModalMock = jest.fn()
const propsMock = {
  title: 'title',
  show: true,
  onCloseModal: onCloseModalMock,
}

describe('useIndex', () => {
  beforeEach(() => {
    const mockUseCustomHook = useUserContext as jest.MockedFunction<
      typeof useUserContext
    >
    mockUseCustomHook.mockReturnValue(useUserContextMock)
  })

  it('should return the correct data', () => {
    const { result } = renderHook(() => useIndex(propsMock))
    expect(typeof result.current.handleLogin).toBe('function')
    expect(result.current.loading).toBeFalsy()
  })

  it('should success login if user is regitered', () => {
    localStorage.setItem(
      USER_LS_KEY,
      JSON.stringify({
        name: 'John',
        username: 'asd',
        password: 'asd',
      }),
    )
    const { result } = renderHook(() => useIndex(propsMock))
    const user = { username: 'asd', password: 'asd' }
    act(() => {
      result.current.handleLogin(user)
    })
    setTimeout(() => {
      expect(onCloseModalMock).toBeCalled()
      expect(setLoggedInUserMock).toBeCalledWith(user)
    }, 1500)
  })
})
