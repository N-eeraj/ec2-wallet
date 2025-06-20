import { useLocation } from "react-router"
import clsx from "clsx"
import Switch from "@components/Auth/Tab/Switch"

function Tab() {
  const location = useLocation()

  return (
    <div className="relative flex w-xs mt-auto rounded-md border border-foreground-faded/25 overflow-hidden">
      <div className={clsx(
        "absolute w-1/2 h-full bg-primary-default rounded-md duration-300",
        location.pathname === "/login" && "left-0",
        location.pathname === "/register" && "left-1/2",
      )} />

      <Switch
        active={location.pathname === "/login"}
        href="/login">
        Existing User
      </Switch>
      <Switch
        active={location.pathname === "/register"}
        href="/register">
        New User
      </Switch>
    </div>
  )
}

export default Tab
