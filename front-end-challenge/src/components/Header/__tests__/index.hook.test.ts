import { renderHook } from '@testing-library/react-hooks'

import { USER_LS_KEY } from 'constants/key'
import { useUserContext } from 'context/UserContext'
import { useHistory, useLocation } from 'react-router-dom'
import useIndex from '../index.hook'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
  useLocation: jest.fn(),
}))
const mockHistory = useHistory as jest.Mock

jest.mock('context/UserContext', () => ({
  useUserContext: jest.fn(),
}))
const useUserContextMock = {
  loggedUser: {
    name: 'John',
    username: 'johnjohn1',
    password: '123',
  },
  setLoggedUser: jest.fn(),
}

describe('useIndex', () => {
  beforeEach(() => {
    ;(useLocation as jest.Mock).mockReturnValue({
      search: '',
    })
    mockHistory.mockReturnValue({
      push: jest.fn(),
      location: { pathname: '/mock-path' },
    } as any)
    ;(useUserContext as jest.Mock).mockReturnValue(useUserContextMock)
  })

  it('should return the correct data', () => {
    const { result } = renderHook(() => useIndex())
    localStorage.setItem(
      USER_LS_KEY,
      JSON.stringify({
        name: 'John',
        username: 'john123',
        password: 'john123',
      }),
    )

    expect(result.current.modal).toBeFalsy()
    expect(result.current.loading).toBeFalsy()
    expect(typeof result.current.handleSearch).toBe('function')
    expect(typeof result.current.handleLogout).toBe('function')
    expect(typeof result.current.setModal).toBe('function')
    expect(typeof result.current.handleClickLogo).toBe('function')
  })

  it('should back to dashboard when click handleClickLogo', () => {
    const { result } = renderHook(() => useIndex())
    result.current.handleClickLogo()
    expect(mockHistory().push).toBeCalledWith('/')
  })

  it('should set queryParmas when click handleSearch', () => {
    const { result } = renderHook(() => useIndex())
    const queryParams = new URLSearchParams()
    const keySearch = 'apple'
    queryParams.set('search', keySearch)
    result.current.handleSearch(keySearch)
    expect(mockHistory().push).toBeCalledWith({
      pathname: 'search-news',
      search: queryParams.toString(),
    })
  })
})
