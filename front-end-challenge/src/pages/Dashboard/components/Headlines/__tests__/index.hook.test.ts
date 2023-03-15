import { renderHook } from '@testing-library/react-hooks'
import useFetchData from 'hooks/useFetchData'
import { useHistory } from 'react-router-dom'
import useIndex from '../index.hook'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}))
const mockHistory = useHistory as jest.Mock

jest.mock('hooks/useFetchData', () => jest.fn())
const useFetchDataMock = {
  data: {
    status: 'ok',
    totalResults: 25,
    articles: [
      {
        urlToImage: 'https://example.com/image.jpg',
        title: 'Example News Title',
        author: 'Example Author',
        url: 'https://example.com',
        publishedAt: '2023-03-15T00:00:00.000Z',
        content: 'Example news content.',
        description: 'description content',
        source: { id: '123', name: 'IDN' },
      },
      {
        urlToImage: 'https://example.com/image2.jpg',
        title: 'Example News Title2',
        author: 'Example Author2',
        url: 'https://example2.com',
        publishedAt: '2023-03-15T00:00:00.000Z',
        content: 'Example news content.2',
        description: 'description content2',
        source: { id: '123', name: 'IDN2' },
      },
    ],
  },
  loading: false,
  error: null,
  refetch: jest.fn(),
}

describe('useIndex', () => {
  beforeEach(() => {
    const mockUseCustomHook = useFetchData as jest.MockedFunction<
      typeof useFetchData
    >
    mockUseCustomHook.mockReturnValue(useFetchDataMock)
  })

  it('should return the correct data', () => {
    const { result } = renderHook(() => useIndex())

    expect(result.current.data).toEqual(useFetchDataMock.data)
    expect(result.current.error).toBeFalsy()
    expect(result.current.loading).toBeFalsy()
  })

  it('should call history.push with approriate value when click handleClickNews', () => {
    mockHistory.mockReturnValue({
      push: jest.fn(),
      location: { pathname: '/mock-path' },
    } as any)

    const { result } = renderHook(() => useIndex())
    result.current.handleClickNews(useFetchDataMock.data.articles[0])
    expect(mockHistory().push).toBeCalledWith({
      pathname: 'news-detail',
      state: useFetchDataMock.data.articles[0],
    })
  })
})
