import type { PropsWithChildren } from "react"
import {
  motion,
  type HTMLMotionProps,
} from "motion/react"
import useMediaQuery from "@hooks/useMediaQuery"

function Card({ children }: PropsWithChildren) {
  const {
    isXs,
  } = useMediaQuery()

  const cardMotionProps: HTMLMotionProps<"div"> = {
    initial: isXs && {
      y: "100%",
    },
    animate: isXs && {
      y: 0,
    },
    transition: {
      duration: 0.75,
      delay: 0.25,
    }
  }

  return (
    <motion.div
      {...cardMotionProps}
      className="flex flex-col justify-between items-center gap-y-6 w-full max-w-xl landscape:max-w-lg min-h-2/3 landscape:min-h-auto mt-auto sm:mt-0 landscape:my-auto px-3 sm:px-8 pt-[calc(7vh-24px)] pb-[calc(5vh-16px)] sm:py-10 landscape:py-8 bg-background-primary rounded-t-4xl sm:rounded-4xl md:rounded-2xl shadow-2xl sm:shadow-md md:shadow-sm">
      {children}
    </motion.div>
  )
}

export default Card
