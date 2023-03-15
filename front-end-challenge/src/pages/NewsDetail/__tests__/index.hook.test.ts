import { renderHook } from '@testing-library/react-hooks'
import { useLocation } from 'react-router-dom'
import useIndex from '../index.hook'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}))

describe('useIndex', () => {
  const mockState = {
    title: 'Sample Article',
    content: 'Lorem ipsum dolor sit amet.',
  }

  beforeAll(() => {
    ;(useLocation as jest.Mock).mockReturnValue({
      state: mockState,
    })
  })

  it('should return the correct data', () => {
    ;(useLocation as jest.Mock).mockReturnValue({
      state: mockState,
    })

    const { result } = renderHook(() => useIndex())

    expect(result.current.data).toEqual(mockState)
    expect(result.current.error).toBeFalsy()
    expect(result.current.loading).toBeTruthy()
  })

  it('should indicate error if state is undefined', () => {
    ;(useLocation as jest.Mock).mockReturnValue({})

    const { result } = renderHook(() => useIndex())

    expect(result.current.loading).toBeTruthy()
    expect(result.current.error).toBeTruthy()
    setTimeout(() => {
      expect(result.current.loading).toBeFalsy()
    }, 500)
  })
})
