import QuickAction from "@components/QuickAction"
import {
  BanknoteArrowUp,
  Scan,
  Zap,
  QrCode,
  Logs,
  Handshake,
} from "lucide-react"

function QuickActionList() {
  const QUICK_ACTIONS = [
    {
      label: "Send Money",
      icon: BanknoteArrowUp,
      action: () => {},
    },
    {
      label: "Scan QR Code",
      icon: Scan,
      action: () => {},
    },
    {
      label: "Recharge Wallet",
      icon: Zap,
      action: () => {},
    },
    {
      label: "Show QR Code",
      icon: QrCode,
      action: () => {},
    },
    {
      label: "All Transactions",
      icon: Logs,
      action: () => {},
    },
    {
      label: "Refer",
      icon: Handshake,
      action: () => {},
    },
  ] as const

  return (
    <section className="landscape:order-1 space-y-2">
      <h3 className="text-foreground-secondary text-lg md:text-xl landscape:text-lg font-semibold">
        Quick Actions
      </h3>
      <ul className="grid grid-cols-4 gap-3">
        {QUICK_ACTIONS.map((action, index) => (
          <li key={index}>
            <QuickAction {...action} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QuickActionList
