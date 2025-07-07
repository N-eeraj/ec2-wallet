import {
  useNavigate,
} from "react-router"
import {
  BanknoteArrowUp,
  Scan,
  Zap,
  ReceiptText,
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
      action: () => navigate("/transactions/scan"),
    },
    {
      label: "Recharge Wallet",
      icon: Zap,
      action: () => navigate("/wallet/recharge"),
    },
    {
      label: "Recharge History",
      icon: ReceiptText,
      action: () => navigate("/wallet"),
    },
    {
      label: "Show QR Code",
      icon: QrCode,
      action: () => navigate("/qr-code"),
    },
    {
      label: "All Transactions",
      icon: Logs,
      action: () => navigate("/transactions"),
    },
    {
      label: "Refer Friend",
      icon: Handshake,
      action: () => share(REFERRAL_DATA),
    },
  ]

  return {
    actions,
  }
}
