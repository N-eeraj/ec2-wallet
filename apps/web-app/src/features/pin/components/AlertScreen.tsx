import {
  NavLink,
} from "react-router"
import Button from "@components/Button"
import PinAnimation from "@features/Pin/components/PinAnimation"

function AlertScreen() {
  return (
    <section className="flex flex-col items-center gap-y-10 landscape:gap-y-8 max-screen-view md:mt-3 py-12">
      <PinAnimation />
      <span className="text-foreground-secondary text-xl md:text-2xl">
        Setup PIN to start using&nbsp;
        <strong className="text-primary-default">
          EC2 Wallet
        </strong>
      </span>
      <NavLink to="/setup-pin">
        <Button>
          Setup PIN
        </Button>
      </NavLink>
    </section>
  )
}

export default AlertScreen
