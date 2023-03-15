import { renderHook } from '@testing-library/react-hooks'
import useIndex from '../index.hook'

describe('useIndex', () => {
  it('should return the correct data', () => {
    const { result } = renderHook(() => useIndex())

    expect(result.current.visible).toBeFalsy()
    expect(typeof result.current.setVisible).toBe('function')
    expect(typeof result.current.handleAction).toBe('function')
  })

  it('should call setVisible when click handleAction', () => {
    const actionMock = jest.fn()
    const { result } = renderHook(() => useIndex())
    result.current.handleAction(actionMock)
    expect(actionMock).toBeCalled()
    expect(result.current.visible).toBeFalsy()
  })
})
