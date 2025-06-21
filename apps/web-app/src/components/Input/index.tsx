import {
  useState,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from "react"
import {
  motion,
  type SVGMotionProps,
} from "motion/react"
import clsx from "clsx"
import {
  Eye,
  EyeOff,
} from "lucide-react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

const MotionEyeOff = motion(EyeOff)
const MotionEye = motion(Eye)

const passwordVisibilityIconMotionProps: SVGMotionProps<SVGElement> = {
  initial:{
    opacity: 0,
  },
  animate:{
    opacity: 1,
  },
  exit:{
    opacity: 0,
  },
  transition:{
    duration: 0.5,
  },
}

function Input({ type, className, containerProps, ...props }: Props) {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <div
      {...containerProps}
      className={clsx(
        "relative w-full",
        containerProps?.className,
      )}>
      <input
        {...props}
        type={passwordVisibility ? "text" : type}
        className={clsx(
          "w-full px-2.5 py-1.5 placeholder:text-foreground-faded/60 border-foreground-faded outline-primary-default rounded-sm duration-300",
          className,
        )} />
        {type === "password" && (
          <button
            type="button"
            tabIndex={-1}
            className="absolute top-1/2 right-1 grid place-content-center h-[calc(100%-8px)] aspect-square hover:bg-background-secondary text-foreground-secondary/80 rounded-sm -translate-y-1/2 duration-300"
            onClick={togglePasswordVisibility}>
            {passwordVisibility ?
              <MotionEyeOff
                {...passwordVisibilityIconMotionProps}
                size={18} /> :
              <MotionEye
                {...passwordVisibilityIconMotionProps}
                size={18} />
            }
          </button>
        )}
    </div>
  )
}

export default Input
