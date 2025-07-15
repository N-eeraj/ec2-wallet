import {
  motion,
  AnimatePresence,
} from "motion/react"
import {
  type FieldError,
} from "react-hook-form"
import {
  ERROR_MESSAGE_MOTION_PROPS,
} from "@constants/motion"
import clsx from "clsx"

interface Props {
  errors?: FieldError
  className?: string
}

function ErrorMessage({ errors, className }: Props) {
  return (
    <AnimatePresence>
      {errors && (
        <motion.span
          {...ERROR_MESSAGE_MOTION_PROPS}
          className={clsx(
            "text-foreground-error text-sm",
            className,
          )}>
          {errors.message}
        </motion.span>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage
