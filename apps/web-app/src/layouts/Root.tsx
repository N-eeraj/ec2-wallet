import {
  Outlet,
} from "react-router"
import {
  Toaster,
} from "sonner"

function Root() {
  return (
    <>
      <Outlet />
      <Toaster richColors />
    </>
  )
}

export default Root
