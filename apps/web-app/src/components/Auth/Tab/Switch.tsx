import type { PropsWithChildren } from "react"
import { Link } from "react-router"
import clsx from "clsx"

interface Props extends PropsWithChildren {
  href: `/${string}`
  active: boolean
}

function Switch({ children, href, active }: Props) {
  return (
    <Link
      to={href}
      className="flex-1 z-10">
      <button className={clsx(
        "w-full p-2",
        active ? "text-white" : "text-primary-default duration-300",
      )}>
        {children}
      </button>
    </Link>
  )
}

export default Switch
