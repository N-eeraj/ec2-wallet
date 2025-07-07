import History from "@pages/user/wallet/History"
import Recharge from "@pages/user/wallet/Recharge"

const walletRoutes = {
  path: "wallet",
  children: [
    {
      index: true,
      Component: History,
    },
    {
      path: "recharge",
      Component: Recharge,
    },
  ],
}

export default walletRoutes

