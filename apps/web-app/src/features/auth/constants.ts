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
    delay: LOGO_ANIMATION_DURATION / 2,
    duration: 0.5,
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
export const AUTH_CARD_CHILDREN_WRAPPER_MOTION_PROPS: HTMLMotionProps<"div"> = {
  variants: {
    initial: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  },
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: {
    duration: 0.3,
  },
}
