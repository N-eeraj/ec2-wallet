export const PIN_DIGITS = 6

export const PIN_ANIMATION_FRAMES = 12
export const PIN_ANIMATION_TRANSITION = {
  ease: "linear",
  repeat: Infinity,
  duration: 2.5,
} as const

export const DEFAULT_TITLE = `Enter your ${PIN_DIGITS} digit PIN` as const
export const DEFAULT_DESCRIPTION = `Enter your ${PIN_DIGITS} digit PIN to continue with this transaction` as const
