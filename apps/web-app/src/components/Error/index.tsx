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

interface Props {
  errors?: FieldError
}

function ErrorMessage({ errors }: Props) {
  return (
    <AnimatePresence>
      {errors && (
        <motion.span
          {...ERROR_MESSAGE_MOTION_PROPS}
          className="text-foreground-error text-sm">
          {errors.message}
        </motion.span>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage
