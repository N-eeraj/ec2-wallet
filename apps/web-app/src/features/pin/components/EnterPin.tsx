import {
  useState,
} from "react"
import {
  PIN_DIGITS,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@features/pin/constants"

import clsx from "clsx"

interface Props {
  title?: string
  description?: string
}

function EnterPin({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }: Props) {
  const [pin, setPin] = useState("")

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-evenly items-center gap-y-6 size-full px-6 py-10 bg-background-secondary z-40">
      <div className="flex flex-col items-center gap-y-1">
        <img
          src="/images/logo.svg"
          alt="EC2 Wallet Logo"
          className="w-20 mb-6" />
        <h2 className="w-5/6 text-lg font-bold text-center">
          {title}
        </h2>
        <p className="w-3/4 text-foreground-faded/75 text-sm text-center">
          {description}
        </p>
      </div>

      <ul className="flex gap-x-2">
        {Array.from({ length: PIN_DIGITS }).map((_, index) => (
          <li
            key={index}
            className={clsx(
              "size-4 rounded-full border duration-300",
              index < pin.length ?
                "bg-gradient-to-br from-primary-default/80 to-primary-hover border-transparent" :
                "bg-background-primary border-primary-default",
            )} />
        ))}
      </ul>

      <div className="">

      </div>
    </section>
  )
}

export default EnterPin
