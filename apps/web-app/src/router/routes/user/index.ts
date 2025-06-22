import User from "@layouts/User"

import Home from "@pages/Home"

const userRoutes = {
  Component: User,
  children: [
    {
      index: true,
      Component: Home,
    },
  ],
}

export default userRoutes
