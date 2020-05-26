export function age(date) {
  const now = new Date(Date.now())

  const birth = new Date(date)

  const idade = (now - birth) / (1000 * 60 * 60 * 24 * 365)
  return parseInt(idade)
}
