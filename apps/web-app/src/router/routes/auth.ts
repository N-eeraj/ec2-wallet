import Auth from "@layouts/Auth"

import Register from "@pages/auth/Register"
import Login from "@pages/auth/Login"

const authRoutes = {
  Component: Auth,
  children: [
    {
      path: "register",
      Component: Register,
    },
    {
      path: "login",
      Component: Login,
    },
  ],
}

export default authRoutes
