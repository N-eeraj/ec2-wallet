import {
  type ButtonHTMLAttributes,
} from "react"
import clsx from "clsx"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

function Button({ loading, disabled, children, className, ...props }: Props) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={clsx(
        "px-5 py-1.5 bg-primary-default hover:bg-primary-hover rounded-sm duration-300",
        className,
      )}>
      {children}
    </button>
  )
}

export default Button
