import {
  createBrowserRouter,
} from "react-router"

import Root from "@layouts/Root"

// routes
import authRoutes from "@router/routes/auth"
import userRoutes from "@router/routes/user"
import PageNotFound from "@pages/PageNotFound"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      authRoutes,
      userRoutes,
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
])

export default router
