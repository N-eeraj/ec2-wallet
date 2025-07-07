import History from "@pages/user/transactions/History"
import NewTransaction from "@pages/user/transactions/New"
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
      path: "new",
      Component: NewTransaction,
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
