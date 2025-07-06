import History from "@pages/user/transaction/History"
import NewTransaction from "@pages/user/transaction/new"
import User from "@pages/user/transaction/User"

const transactionRoutes = {
  path: "transaction",
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
  ],
}

export default transactionRoutes
