import {
  Link,
} from "react-router"
import clsx from "clsx"

interface Props {
  href: `/${string}`
  active: boolean
  text: {
    label: string
    link: string
  }
}

function Switch({ href, active, text }: Props) {
  return (
    <div className={clsx(
      "flex justify-center items-baseline flex-1 gap-x-2 text-center z-10",
      active && "landscape:hidden",
    )}>
      <span className="portrait:hidden text-sm text-foreground-faded">
        {text.label}?
      </span>
      <Link
        to={href}
        className="portrait:size-full">
        <button className="w-full landscape:w-fit portrait:p-2 font-bold duration-300">
          <span className={clsx(
            "landscape:hidden",
            active ? "text-white" : "text-primary-default",
          )}>
            {text.label}
          </span>
          <span className="portrait:hidden text-link-default hover:text-link-hover">
            {text.link}
          </span>
        </button>
      </Link>
    </div>
  )
}

export default Switch
