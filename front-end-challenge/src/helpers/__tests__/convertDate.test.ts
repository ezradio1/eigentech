import convertDate from 'helpers/convertDate'

describe('convertDate', () => {
  it('should return correct values', () => {
    const isValidDate = convertDate('2023-03-15T00:00:00.000Z')
    const isNotValidDate = convertDate('ksdjhaksjd')
    expect(isValidDate).toBe('15 March 2023')
    expect(isNotValidDate).toBe('Invalid Date')
  })
})
