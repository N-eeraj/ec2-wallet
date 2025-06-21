import {
  type SVGMotionProps,
  type HTMLMotionProps,
} from "motion/react"

// global
export const FADE_MOTION = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

// input component
export const PASSWORD_VISIBILITY_MOTION_PROPS: SVGMotionProps<SVGElement> = {
  ...FADE_MOTION,
  transition: {
    duration: 0.5,
  },
}
export const ERROR_MESSAGE_MOTION_PROPS: HTMLMotionProps<"span"> = {
  ...FADE_MOTION,
  transition: {
    duration: 0.2,
  },
}
