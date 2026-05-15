export function formatDate(date: string) {
  return new Intl.DateTimeFormat('cs-CZ').format(new Date(date))
}