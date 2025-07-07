import {
  useNavigate,
} from "react-router"
import {
  BanknoteArrowUp,
  Scan,
  Zap,
  QrCode,
  Logs,
  Handshake,
} from "lucide-react"
import share from "@utils/share"
import {
  REFERRAL_DATA,
} from "@constants/referral"

export default function useQuickActions() {
  const navigate = useNavigate()

  const actions = [
    {
      label: "Send Money",
      icon: BanknoteArrowUp,
      action: () => navigate("/transactions/new"),
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
      action: () => navigate("/transactions"),
    },
    {
      label: "Refer",
      icon: Handshake,
      action: () => share(REFERRAL_DATA),
    },
  ] as const

  return {
    actions,
  }
}
