import {
  Outlet,
} from "react-router"

import AuthLogo from "@components/Auth/Logo"
import AuthCard from "@components/Auth/Card"
import Tab from "@components/Auth/Tab"

function Auth() {
  return (
    <main className="flex flex-col justify-end landscape:justify-start items-center gap-y-6 sm:gap-y-12 landscape:gap-y-0 h-svh sm:p-16 bg-background-secondary">
      <AuthLogo />

      <AuthCard>
        <Outlet />
        <Tab />
      </AuthCard>
    </main>
  )
}

export default Auth
