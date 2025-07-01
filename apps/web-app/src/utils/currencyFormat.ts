export default function currencyFormat(amount: number | undefined | null) {
  return Intl.NumberFormat("en-IN", {
    style: "decimal",
    minimumFractionDigits: 2,
  }).format(amount ?? 0)
}
