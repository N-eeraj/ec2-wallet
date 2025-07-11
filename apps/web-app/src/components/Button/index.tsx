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
}

function Button({ loading, disabled, children, className, ...props }: Props & HTMLMotionProps<"button">) {
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
        <Loader2 className="mx-auto animate-spin" /> :
        children
      }
    </motion.button>
  )
}

export default Button
