import {
  useState,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from "react"
import {
  motion,
  AnimatePresence,
} from "motion/react"
import {
  type FieldError,
} from "react-hook-form"
import clsx from "clsx"
import {
  Eye,
  EyeOff,
} from "lucide-react"
import {
  PASSWORD_VISIBILITY_MOTION_PROPS,
  ERROR_MESSAGE_MOTION_PROPS,
} from "@constants/motion"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>
  errors?: FieldError
}

const MotionEyeOff = motion(EyeOff)
const MotionEye = motion(Eye)

function Input({ type, errors, className, containerProps, ...props }: Props) {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <div
      {...containerProps}
      className={clsx(
        "relative flex flex-col gap-y-1 w-full",
        containerProps?.className,
      )}>

      <input
        {...props}
        type={passwordVisibility ? "text" : type}
        className={clsx(
          "w-full h-10 px-2.5 placeholder:text-foreground-faded/60 border-foreground-faded outline-primary-default rounded-sm duration-300",
          className,
        )} />

        {type === "password" && (
          <button
            type="button"
            tabIndex={-1}
            className="absolute top-1 right-1 grid place-content-center size-8 hover:bg-background-secondary text-foreground-secondary/80 rounded-sm duration-300"
            onClick={togglePasswordVisibility}>
            {passwordVisibility ?
              <MotionEyeOff
                {...PASSWORD_VISIBILITY_MOTION_PROPS}
                size={18} /> :
              <MotionEye
                {...PASSWORD_VISIBILITY_MOTION_PROPS}
                size={18} />
            }
          </button>
        )}

        <AnimatePresence>
          {errors && (
            <motion.span
              {...ERROR_MESSAGE_MOTION_PROPS}
              className="text-foreground-error text-sm">
              {errors.message}
            </motion.span>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Input
