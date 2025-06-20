import { Outlet } from "react-router"
import AuthLogo from "@components/Auth/Logo"
import Tab from "@components/Auth/Tab"

function Auth() {
  return (
    <main className="flex flex-col justify-end landscape:justify-start items-center gap-y-6 sm:gap-y-12 landscape:gap-y-0 h-svh sm:p-16 bg-background-secondary">
      <AuthLogo />

      <div className="flex flex-col justify-between items-center gap-y-6 w-full max-w-xl landscape:max-w-lg min-h-2/3 landscape:min-h-auto mt-auto sm:mt-0 landscape:my-auto px-3 sm:px-8 pt-[calc(7vh-24px)] pb-[calc(5vh-16px)] sm:py-10 bg-background-primary rounded-t-4xl sm:rounded-4xl md:rounded-2xl shadow-2xl sm:shadow-md md:shadow-sm duration-500">
        <Outlet />
        <Tab />
      </div>
    </main>
  )
}

export default Auth
