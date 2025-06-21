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
  AUTH_CARD_CHILDREN_WRAPPER_MOTION_PROPS,
} from "@features/auth/constants"
import { useMemo } from "react"

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

  const childrenWrapperAnimationDirection = useMemo(
    () => location.pathname === "/login" ? "left" : "right", [
    location.pathname,
  ])

  const childrenWrapperMotionProps: HTMLMotionProps<"div"> = {
    ...(!isLandscape && {
      ...AUTH_CARD_CHILDREN_WRAPPER_MOTION_PROPS,
      custom: childrenWrapperAnimationDirection,
    }),
  }

  return {
    cardMotionProps,
    childrenWrapperAnimationDirection,
    childrenWrapperMotionProps,
  }
}
