export function formatDate(date) {
  return Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(new Date(date))
}
