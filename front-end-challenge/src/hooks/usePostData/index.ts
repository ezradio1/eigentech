const usePostData = () => {
  const postData = async <T>(url: string, data: T) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      return { data: responseData, error: null, loading: false }
    } catch (error) {
      return { data: null, error: error as Error, loading: false }
    }
  }

  return { postData }
}

export default usePostData
