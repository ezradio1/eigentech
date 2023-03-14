const useDeleteData = () => {
  const deleteData = async (url: string, id: number) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${url}/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      return { data: responseData, error: null, loading: false }
    } catch (error) {
      return { data: null, error: error as Error, loading: false }
    }
  }

  return { deleteData }
}

export default useDeleteData
