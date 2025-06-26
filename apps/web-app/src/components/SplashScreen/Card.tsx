import {
  motion,
} from "motion/react"
import {
  CARD_ANIMATION_TRANSITION,
} from "@constants/splashScreen"

interface Props {
  top: Array<number>
  left: Array<number>
}

function Card({ top, left }: Props) {
  return (
    <motion.div
      animate={{
        top,
        left,
      }}
      transition={CARD_ANIMATION_TRANSITION}
      className="absolute size-full p-2 bg-background-primary rounded-md">
      <div className="size-full bg-primary-default rounded-md" />
    </motion.div>
  )
}

export default Card
