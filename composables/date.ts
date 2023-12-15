export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ja', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
