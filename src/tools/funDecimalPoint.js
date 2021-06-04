export default function funDecimalPoint(value) {
  const INTL = Intl.NumberFormat().format(value)
  return INTL
}
