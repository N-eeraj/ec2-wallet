import {
  PIN_DIGITS,
} from "@features/pin/constants"
import clsx from "clsx"

interface Props {
  pin: string
}

function PinView({ pin }: Props) {
  return (
    <ul className="flex gap-x-2 md:gap-x-3.5">
      {Array.from({ length: PIN_DIGITS }).map((_, index) => (
        <li
          key={index}
          className={clsx(
            "size-4 md:size-6 landscape:size-4.5 rounded-full border duration-300",
            index < pin.length ?
              "bg-gradient-to-br from-primary-default/80 to-primary-hover border-transparent" :
              "bg-background-primary border-primary-default",
          )} />
      ))}
    </ul>
  )
}

export default PinView
