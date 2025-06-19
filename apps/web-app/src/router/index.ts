import { createBrowserRouter  } from "react-router"

import Root from "@layouts/Root"

// routes
import Home from "@pages/Home"
import guestRoutes from "@router/routes/guest"
import PageNotFound from "@pages/PageNotFound"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      guestRoutes,
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
])

export default router
