export const PIN_DIGITS = 6

export const PIN_ANIMATION_FRAMES = 12
export const PIN_ANIMATION_TRANSITION = {
  ease: "linear",
  repeat: Infinity,
  duration: 2.5,
} as const

export const PIN_LENGTH_ERROR = {
  message: `Enter the ${PIN_DIGITS} digit PIN`,
  duration: 2000,
} as const

export const DEFAULT_ENTER_PIN = {
  title: `Enter your ${PIN_DIGITS} digit PIN`,
  description: `Enter your ${PIN_DIGITS} digit PIN to continue with this transaction`,
} as const

// initial PIN title/description
export const SETUP_ENTER_PIN = {
  title: `Enter a ${PIN_DIGITS} digit PIN`,
  description: `This PIN is needed for every transaction and balance check to keep your account secure`,
} as const
export const SETUP_RE_ENTER_PIN = {
  title: `Re-enter a ${PIN_DIGITS} digit PIN`,
  description: `Please enter the same PIN as before to complete the EC2 Wallet PIN setup`,
} as const
