import User from "@layouts/User"

import transactionRoutes from "@router/routes/user/transaction"
import walletRoutes from "@router/routes/user/wallet"

import Home from "@pages/user/Home"
import Profile from "@pages/user/Profile"
import Settings from "@pages/user/Settings"
import SetupPin from "@pages/user/SetupPin"
import QrCode from "@pages/user/QrCode"

const userRoutes = {
  Component: User,
  children: [
    {
      index: true,
      Component: Home,
    },
    {
      path: "profile",
      Component: Profile,
    },
    {
      path: "settings",
      Component: Settings,
    },
    {
      path : "setup-pin",
      Component: SetupPin,
    },
    {
      path: "qr-code",
      Component: QrCode,
    },
    transactionRoutes,
    walletRoutes,
  ],
}

export default userRoutes
