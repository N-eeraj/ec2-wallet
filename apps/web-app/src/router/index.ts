import { createBrowserRouter  } from "react-router"

import Root from "@layouts/Root"

// routes
import Home from "@pages/Home"
import authRoutes from "@router/routes/auth"
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
      authRoutes,
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
])

export default router
