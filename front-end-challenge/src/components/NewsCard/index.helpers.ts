export const isImage = (url: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']

  const extension = url.substr(url.lastIndexOf('.'))

  if (imageExtensions.includes(extension.toLowerCase())) return true

  return false
}
