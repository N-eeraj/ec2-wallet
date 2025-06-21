import {
  Outlet,
} from "react-router"

import AuthLogo from "@features/authentication/components/Logo"
import AuthCard from "@features/authentication/components/Card"
import Tab from "@features/authentication/components/Tab"

function Auth() {
  return (
    <main className="flex flex-col justify-end landscape:justify-start items-center gap-y-6 sm:gap-y-12 landscape:gap-y-0 h-svh sm:p-16 bg-background-secondary">
      <AuthLogo />

      <AuthCard tab={Tab}>
        <Outlet />
      </AuthCard>
    </main>
  )
}

export default Auth
