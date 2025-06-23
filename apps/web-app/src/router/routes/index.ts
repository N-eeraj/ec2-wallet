import Root from "@layouts/Root"

// routes
import authRoutes from "@router/routes/auth"
import userRoutes from "@router/routes/user"
import PageNotFound from "@pages/PageNotFound"

const routes = [
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
]

export default routes
