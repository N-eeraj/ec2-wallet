import Guest from "@layouts/Guest"

import Register from "@pages/guest/Register"
import Login from "@pages/guest/Login"

const guestRoutes = {
  Component: Guest,
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

export default guestRoutes
