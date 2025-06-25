import {
  Outlet,
} from "react-router"

import SplashScreen from "@components/SplashScreen"
import ErrorScreen from "@components/ErrorScreen"
import Navbar from "@components/Navbar"
import useUserLayout from "@hooks/useUserLayout"

function Auth() {
  const {
    isError,
    isFetching,
  } = useUserLayout()

  if (isFetching) return <SplashScreen />
  if (isError) return <ErrorScreen />

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      </>
  )
}

export default Auth
