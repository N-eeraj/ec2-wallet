import {
  useLocation,
} from "react-router"
import {
  type HTMLMotionProps,
} from "motion/react"

import useMediaQuery from "@hooks/useMediaQuery"
import {
  AUTH_CARD_BASE_MOTION_PROPS,
  AUTH_CARD_XS_MOTION_PROPS,
} from "@features/authentication/constants"

export default function useAuthCard() {
  const location = useLocation()

  const {
    isXs,
    isLandscape,
  } = useMediaQuery()

  const cardMotionProps: HTMLMotionProps<"div"> = {
    ...AUTH_CARD_BASE_MOTION_PROPS,
    ...(isXs && AUTH_CARD_XS_MOTION_PROPS),
  }

  const childrenWrapperAnimationDirection = location.pathname === "/login" ? "left" : "right"

  const childrenWrapperMotionProps: HTMLMotionProps<"div"> = {
    variants: {
      initial: (direction: "left" | "right") => ({
        ...(!isLandscape && {x: direction === "right" ? 100 : -100}),
        opacity: 0,
      }),
      animate: {
        x: 0,
        opacity: 1,
      },
      exit: (direction: "left" | "right") => ({
        ...(!isLandscape && {x: direction === "right" ? -100 : 100}),
        opacity: 0,
      }),
    },
    custom: childrenWrapperAnimationDirection,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: {
      duration: 0.2,
    },
  }

  return {
    cardMotionProps,
    childrenWrapperAnimationDirection,
    childrenWrapperMotionProps,
  }
}
