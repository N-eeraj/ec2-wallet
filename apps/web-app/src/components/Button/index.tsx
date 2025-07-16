import {
  type ButtonHTMLAttributes,
} from "react"
import {
  motion,
  type HTMLMotionProps,
} from "motion/react"
import clsx from "clsx"
import {
  Loader2,
} from "lucide-react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loaderClassName?: string
}

function Button({ loading, disabled, children, className, loaderClassName, ...props }: Props & HTMLMotionProps<"button">) {
  return (
    <motion.button
      {...props}
      disabled={loading || disabled}
      className={clsx(
        "px-5 py-1.5 bg-primary-default hover:bg-primary-hover rounded-sm duration-300",
        className,
        loading && "opacity-50 !cursor-wait",
      )}>
      {loading ?
        <Loader2
          className={clsx(
            "mx-auto animate-spin",
            loaderClassName,
          )} /> :
        children
      }
    </motion.button>
  )
}

export default Button
