export default function getHue(phone: string) {
  let hash = 0
  for (let i = 0; i < phone.length; i++) {
    hash = (hash << 5) - hash + phone.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) % 60 * 6
}
