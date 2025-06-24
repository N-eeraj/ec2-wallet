import {
  type Transition,
} from "motion/react"

export const CARD_ANIMATION_TRANSITION: Transition =  {
  ease: "easeInOut",
  repeat: Infinity,
  duration: 2.25,
}

export const CARD_ANIMATIONS = [
  {
    top: [-32],
    left: [-32],
  },
  {
    top: [-32, 0, 0, 0, -32],
    left: [-32, 0, 0, 0, -32],
  },
  {
    top: [-32, 0, 32, 0, -32],
    left: [-32, 0, 32, 0, -32],
  },
]
