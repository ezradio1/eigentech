import { isImage } from '../index.helpers'

describe('isImage', () => {
  it('should return correct values', () => {
    const isImageData = isImage('https://google.com?gajah.png')
    const isNotImageData = isImage('https://google.com?gajah.mp4')
    expect(isImageData).toBeTruthy()
    expect(isNotImageData).toBeFalsy()
  })
})
