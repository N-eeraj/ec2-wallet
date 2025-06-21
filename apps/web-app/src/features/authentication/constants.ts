import {
  type HTMLMotionProps,
} from "motion/react"

// logo animation
export const LOGO_ANIMATION_DURATION = 0.5
export const LOGO_MOTION_PROPS: HTMLMotionProps<"div"> = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: LOGO_ANIMATION_DURATION,
  },
}

// auth card animation
export const AUTH_CARD_BASE_MOTION_PROPS: HTMLMotionProps<"div"> = {
  transition: {
    delay: 0.75,
    duration: LOGO_ANIMATION_DURATION / 2,
  },
}
export const AUTH_CARD_XS_MOTION_PROPS: HTMLMotionProps<"div"> = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
  },
}
