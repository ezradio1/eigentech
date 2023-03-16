import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useResponsive from '../index'

describe('useResponsive', () => {
  describe('isMobile', () => {
    it('should be false when window width is greater than 768', () => {
      const { result } = renderHook(() => useResponsive())
      window.innerWidth = 1024
      fireEvent(window, new Event('resize'))

      const { isMobile } = result.current

      expect(isMobile).toBeFalsy()
    })

    it('should be true when window width is less than or equal to 768', () => {
      const { result } = renderHook(() => useResponsive())
      window.innerWidth = 768
      fireEvent(window, new Event('resize'))

      const { isMobile } = result.current

      expect(isMobile).toBeTruthy()
    })

    it('should update isMobile when window is resized', () => {
      const { result } = renderHook(() => useResponsive())
      window.innerWidth = 1024
      fireEvent(window, new Event('resize'))

      const initialIsMobile = result.current.isMobile
      const resizeEvent = new Event('resize')
      window.innerWidth = 768
      fireEvent(window, new Event('resize'))
      window.dispatchEvent(resizeEvent)
      const updatedIsMobile = result.current.isMobile

      expect(initialIsMobile).toBeFalsy()
      expect(updatedIsMobile).toBeTruthy()
    })

    it('should remove event listener on unmount', () => {
      const { unmount } = renderHook(() => useResponsive())
      window.innerWidth = 1024
      fireEvent(window, new Event('resize'))
      const removeEventListenerSpy = jest.spyOn(global, 'removeEventListener')

      unmount()

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function),
      )
    })
  })
})
