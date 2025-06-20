import clsx from "clsx"
import {
  useLocation,
  Link,
} from "react-router"

function Tab() {
  const location = useLocation()

  return (
    <div className="flex w-xs rounded-md border border-foreground-faded/25 overflow-hidden">
      <Link
        to="/login"
        className="flex-1">
        <button className={clsx(
          "w-full p-2",
          location.pathname === "/login" ? "text-white" : "text-primary-default duration-300",
        )}>
          Existing User
        </button>
      </Link>
      <Link
        to="/register"
        className="flex-1">
        <button className={clsx(
          "w-full p-2",
          location.pathname === "/register" ? "text-white" : "text-primary-default duration-300",
        )}>
          New User
        </button>
      </Link>
    </div>
  )
}

export default Tab
