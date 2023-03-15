import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import useIndex from '../index.hook'

const onCloseModalMock = jest.fn()
const propsMock = {
  title: 'title',
  show: true,
  onCloseModal: onCloseModalMock,
}

describe('useIndex', () => {
  it('should return the correct data', () => {
    const { result } = renderHook(() => useIndex(propsMock))
    expect(typeof result.current.handleSignUp).toBe('function')
    expect(result.current.loading).toBeFalsy()
  })

  it('should success sign up', () => {
    const { result } = renderHook(() => useIndex(propsMock))
    const user = { name: 'John', username: 'asd', password: 'asd' }
    act(() => {
      result.current.handleSignUp(user)
    })
    setTimeout(() => {
      expect(onCloseModalMock).toBeCalled()
    }, 2200)
  })
})
