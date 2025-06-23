import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import routes from "@router/routes"

const router = createBrowserRouter(routes)

function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
