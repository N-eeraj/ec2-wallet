import {
  useLocation,
} from "react-router"
import clsx from "clsx"
import Switch from "@components/Auth/Tab/Switch"

function Tab() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/login"
  const isRegisterPage = location.pathname === "/register"

  return (
    <div className="relative flex w-xs landscape:w-auto mt-auto rounded-md portrait:border border-foreground-faded/25 overflow-hidden">
      <div className={clsx(
        "absolute landscape:hidden w-1/2 h-full bg-primary-default rounded-md duration-300",
        isLoginPage && "left-0",
        isRegisterPage && "left-1/2",
      )} />

      <Switch
        active={isLoginPage}
        href="/login"
        text={{
          label: "Existing User",
          link: "Login",
        }} />
      <Switch
        active={isRegisterPage}
        href="/register"
        text={{
          label: "New User",
          link: "Register",
        }} />
    </div>
  )
}

export default Tab
