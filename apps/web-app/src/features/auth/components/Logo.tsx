import {
  motion,
} from "motion/react"
import {
  LOGO_MOTION_PROPS,
} from "@features/auth/constants"

function Logo() {
  return (
    <motion.div
      {...LOGO_MOTION_PROPS}
      className="flex items-center gap-x-2 sm:gap-x-4 flex-1 landscape:flex-none">
      <img
        src="/images/logo.svg"
        alt="EC2 Wallet Logo"
        className="w-10 sm:w-20 landscape:w-16" />
      <h1 className="text-3xl sm:text-5xl landscape:text-[40px]">
        Wallet
      </h1>
    </motion.div>
  )
}

export default Logo
