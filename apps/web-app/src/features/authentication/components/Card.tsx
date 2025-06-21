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
      className="flex flex-col justify-between items-center gap-y-6 w-full max-w-xl landscape:max-w-md min-h-2/3 landscape:min-h-80 mt-auto sm:mt-0 landscape:my-auto px-3 sm:px-8 py-[calc(7vh-24px)] sm:py-10 landscape:py-8 bg-background-primary rounded-t-4xl sm:rounded-4xl md:rounded-2xl shadow-2xl sm:shadow-md md:shadow-sm overflow-x-hidden">
      <AnimatePresence
        mode="wait"
        custom={childrenWrapperAnimationDirection}>
        <motion.div
          key={location.pathname}
          {...childrenWrapperMotionProps}
          className="flex flex-col gap-y-8 landscape:gap-y-4 w-full portrait:max-w-xs">
          {children}
        </motion.div>
      </AnimatePresence>

      <Tab />
    </motion.div>
  )
}

export default Card
