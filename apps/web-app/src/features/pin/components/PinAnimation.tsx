import {
  motion,
  type HTMLMotionProps,
} from "motion/react"
import {
  PIN_ANIMATION_FRAMES,
  PIN_DIGITS,
  PIN_ANIMATION_TRANSITION,
} from "@features/pin/constants"

// generate animation keyframes for progress bar
const progressAnimation: HTMLMotionProps<"div"> = {
  width: [],
  opacity: [],
}
for (let i = 0; i < PIN_ANIMATION_FRAMES; i++) {
  if (i === 0) {
    progressAnimation.width.push(0)
    progressAnimation.opacity.push(1)
  } else {
    progressAnimation.width.push(`${Math.min(12.5 * (i + 1), 100)}%`)
    progressAnimation.opacity.push(Number(i + 1 !== PIN_ANIMATION_FRAMES))
  }
}

function PinAnimation() {
  return (
    <div className="flex flex-col items-start gap-y-8 w-full max-w-xs">
      <div className="w-full bg-foreground-faded/75 rounded-full overflow-hidden">
        <motion.div
          animate={progressAnimation}
          transition={PIN_ANIMATION_TRANSITION}
          className="h-3 bg-primary-default" />
      </div>
      

      <div className="flex justify-evenly w-full pt-3 border-2 border-foreground-faded/75 rounded-md">
        {Array.from({ length: PIN_DIGITS }).map((_, index) => (
          <motion.h3
            key={index}
            animate={{
              opacity: [0, ...Array.from({ length: PIN_DIGITS + 4 }).map((_, i) => Number(i > index)), 0],
              x: [-10, ...Array.from({ length: PIN_DIGITS + 4 }).map((_, i) => i > index ? 0 : -10), 0],
            }}
            transition={PIN_ANIMATION_TRANSITION}
            className="text-primary-default text-6xl font-bold">
            *
          </motion.h3>
          ))
        }
      </div>
    </div>
  )
}

export default PinAnimation
