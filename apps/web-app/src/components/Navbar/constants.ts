import {
  type HTMLMotionProps,
}  from "motion/react"

export const LIST_MOTION_PROPS: HTMLMotionProps<"ul"> = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
  transition: {
    type: "tween",
    duration: 0.2,
  }
}
