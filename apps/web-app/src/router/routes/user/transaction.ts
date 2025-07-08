import History from "@pages/user/transactions/History"
import User from "@pages/user/transactions/User"
import Scanner from "@pages/user/transactions/Scanner"

const transactionRoutes = {
  path: "transactions",
  children: [
    {
      index: true,
      Component: History,
    },
    {
      path: "user/:userId",
      Component: User,
    },
    {
      path: "scan",
      Component: Scanner,
    },
  ],
}

export default transactionRoutes
