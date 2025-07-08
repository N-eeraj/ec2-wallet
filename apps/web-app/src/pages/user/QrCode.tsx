import QrCodeView from "@features/transactions/components/QrCode"
import userStore from "@stores/user"

function QrCode() {
  const user = userStore(({ user }) => user)
  if (!user) return

  return (
    <QrCodeView {...user} />
  )
}

export default QrCode
