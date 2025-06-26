import {
  NavLink,
} from "react-router"

function Brand() {
  return (
    <NavLink
      to="/"
      className="flex items-center gap-x-2 md:gap-x-3 landscape:gap-x-2.5">
      <img
        src="/images/logo.svg"
        alt="ec2-wallet-logo"
        className="w-8 md:w-12 landscape:w-10" />
      <h2 className="text-xl md:text-3xl landscape:text-2xl">
        Wallet
      </h2>
    </NavLink>
  )
}

export default Brand