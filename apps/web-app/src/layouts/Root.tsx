import {
  Outlet,
} from "react-router"
import {
  Toaster,
} from "sonner"
import {
  SkeletonTheme,
} from "react-loading-skeleton"
import Loader from "@components/Loader"

import "react-loading-skeleton/dist/skeleton.css"

function Root() {
  return (
    <>
      <SkeletonTheme
        baseColor="var(--color-background-secondary)"
        highlightColor="var(--color-background-primary)">
        <Outlet />
        <Toaster richColors />
        <Loader />
      </SkeletonTheme>
    </>
  )
}

export default Root
