import {
  PIN_DIGITS,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "@features/pin/constants"

import useEnterPin from "@features/pin/hooks/useEnterPin"
import clsx from "clsx"

interface Props {
  title?: string
  description?: string
}

function EnterPin({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }: Props) {
  const {
    pin,
    keypad,
  } = useEnterPin()

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-evenly md:justify-center items-center gap-y-8 size-full px-6 py-10 bg-background-secondary z-40">
      <div className="flex flex-col items-center gap-y-1 md:gap-y-2">
        <img
          src="/images/logo.svg"
          alt="EC2 Wallet Logo"
          className="w-20 md:w-28 landscape:w-24 mb-6" />
        <h2 className="w-5/6 text-lg md:text-3xl landscape:text-2xl font-bold text-center">
          {title}
        </h2>
        <p className="w-3/4 text-foreground-faded/75 text-sm md:text-lg landscape:text-sm text-center">
          {description}
        </p>
      </div>

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

      <ul className="grid grid-cols-3 w-full max-w-96 mt-auto md:mt-12">
        {keypad.map(({ key, action }, index) => (
          <li key={index}>
            {key !== null && (
              <button
                className="size-full h-[min(10vh,80px)] hover:bg-primary-hover/20 text-2xl md:text-4xl landscape:text-2xl font-bold text-center rounded duration-300"
                onClick={action}>
                {key}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EnterPin
