import {
  Outlet,
} from "react-router"
import useUserLayout from "@hooks/useUserLayout"
import SplashScreen from "@components/SplashScreen"
import ErrorScreen from "@components/ErrorScreen"

function Auth() {
  const {
    isError,
    isFetching,
  } = useUserLayout()

  if (isFetching) return <SplashScreen />
  if (isError) return <ErrorScreen />

  return (
    <main className="">
      <Outlet />
    </main>
  )
}

export default Auth
