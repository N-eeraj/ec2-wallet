import {
  Outlet,
} from "react-router"
import {
  Toaster,
} from "sonner"
import Loader from "@components/Loader"

function Root() {
  return (
    <>
      <Outlet />
      <Toaster richColors />
      <Loader />
    </>
  )
}

export default Root
