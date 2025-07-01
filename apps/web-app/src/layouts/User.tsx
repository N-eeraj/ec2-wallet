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
      <main className="p-4 md:px-8 md:py-6">
        <Outlet />
      </main>
    </>
  )
}

export default Auth
