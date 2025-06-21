import {
  motion,
  type HTMLMotionProps,
} from "motion/react"

const logoMotionProps: HTMLMotionProps<"div"> = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
  },
}

function Logo() {
  return (
    <motion.div
      {...logoMotionProps}
      className="flex items-center gap-x-2 sm:gap-x-4 flex-1 landscape:flex-none">
      <img
        src="/images/logo.svg"
        alt="ec2-wallet-logo"
        className="w-10 sm:w-20 landscape:w-16" />
      <h1 className="text-3xl sm:text-5xl landscape:text-[40px]">
        Wallet
      </h1>
    </motion.div>
  )
}

export default Logo
