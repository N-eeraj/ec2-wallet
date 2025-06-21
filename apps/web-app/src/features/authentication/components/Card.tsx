import {
  type FC,
  type PropsWithChildren,
} from "react"
import {
  motion,
  AnimatePresence,
} from "motion/react"
import useAuthCard from "@features/authentication/hooks/useAuthCard"

interface Props extends PropsWithChildren {
  tab: FC
}

function Card({ children, tab: Tab }: Props) {
  const {
    cardMotionProps,
    childrenWrapperMotionProps,
    childrenWrapperAnimationDirection,
  } = useAuthCard()

  return (
    <motion.div
      {...cardMotionProps}
      className="flex flex-col justify-between items-center gap-y-6 w-full max-w-xl landscape:max-w-lg min-h-2/3 landscape:min-h-auto mt-auto sm:mt-0 landscape:my-auto px-3 sm:px-8 pt-[calc(7vh-24px)] pb-[calc(5vh-16px)] sm:py-10 landscape:py-8 bg-background-primary rounded-t-4xl sm:rounded-4xl md:rounded-2xl shadow-2xl sm:shadow-md md:shadow-sm overflow-x-hidden">
      <AnimatePresence
        mode="wait"
        custom={childrenWrapperAnimationDirection}>
        <motion.div
          key={location.pathname}
          {...childrenWrapperMotionProps}
          className="w-full portrait:max-w-xs">
          {children}
        </motion.div>
      </AnimatePresence>

      <Tab />
    </motion.div>
  )
}

export default Card
