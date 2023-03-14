export const isVideo = (url: string) => {
  const videoExtensions = ['.mp4', '.avi', '.mkv', '.webm', '.mov']

  const extension = url.substr(url.lastIndexOf('.'))

  if (videoExtensions.includes(extension.toLowerCase())) return true

  return false
}

export const isImage = (url: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']

  const extension = url.substr(url.lastIndexOf('.'))

  if (imageExtensions.includes(extension.toLowerCase())) return true

  return false
}
