import {
  NavLink,
} from "react-router"
import Button from "@components/Button"
import currencyFormat from "@utils/currencyFormat"
import type {
  User,
} from "@dTypes/user"

interface Props {
  amount: number
  userName: User["name"]
}

function Success({ amount, userName }: Props) {
  return (
    <section className="flex flex-col justify-center items-center gap-y-6 md:gap-y-10 h-svh">
      <img
        src="/images/success.gif"
        alt="success checkmark"
        className="size-36 md:size-48 landscape:size-40" />

      <div className="flex flex-col items-center gap-y-1.5 md:portrait:gap-y-3.5 landscape:gap-y-2 mt-6">
        <h2 className="text-foreground-success text-3xl md:text-6xl landscape:text-5xl font-bold">
          Payment Success
        </h2>
        <p className="text-foreground-secondary text-sm md:text-2xl landscape:text-lg">
          Paid {currencyFormat(amount)} to {userName}
        </p>
      </div>

      <NavLink href="/">
        <Button className="w-32 md:portrait:text-xl">
          Home
        </Button>
      </NavLink>
    </section>
  )
}

export default Success
