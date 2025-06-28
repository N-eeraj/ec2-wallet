import {
  PIN_DIGITS,
  DEFAULT_ENTER_PIN,
} from "@features/pin/constants"
import useEnterPin from "@features/pin/hooks/useEnterPin"
import Keypad from "@components/Keypad"
import {
  Delete,
  CheckCircle2,
  X,
} from "lucide-react"
import clsx from "clsx"

interface Props {
  title?: string
  description?: string
  onClose: () => void
  onSubmit: (_pin: string) => void
}

function EnterPin({
  title = DEFAULT_ENTER_PIN.title,
  description = DEFAULT_ENTER_PIN.description,
  onClose,
  onSubmit,
}: Props) {
  const {
    pin,
    handleKeypadInput,
    handleDeleteInput,
    handleSubmit,
  } = useEnterPin(onSubmit)

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-evenly md:justify-center items-center gap-y-8 size-full px-6 py-10 bg-background-secondary z-40">
      <button
        className="fixed top-2 left-2"
        onClick={onClose}>
        <X className="size-6" />
      </button>

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

      <Keypad
        leftSlot={(
          <Delete
            className="mx-auto md:size-12 landscape:size-8"
            onClick={handleDeleteInput} />
        )}
        rightSlot={(
          <CheckCircle2
            className="mx-auto md:size-12 landscape:size-8"
            onClick={handleSubmit} />
        )}
        onClick={handleKeypadInput}
        onDelete={handleDeleteInput}
        onEnter={handleSubmit} />
    </section>
  )
}

export default EnterPin
