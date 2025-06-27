import {
  useState,
  type ReactNode,
} from "react"
import {
  toast,
} from "sonner"

import {
  PIN_DIGITS,
  PIN_LENGTH_ERROR,
} from "@features/pin/constants"

import {
  Delete,
  CheckCircle2,
} from "lucide-react"

export default function useEnterPin() {
  const [pin, setPin] = useState("")

  const handleKeypadInput = (value: number | string) => {
    if (pin.length === PIN_DIGITS) return
    setPin((pin) => `${pin}${value}`)
  }
  const handleDeleteInput = () => {
    setPin(pin => pin.slice(0, -1))
  }
  const handleSubmit = () => {
    if (pin.length < PIN_DIGITS) {
      return toast.error(PIN_LENGTH_ERROR.message, {
        duration: PIN_LENGTH_ERROR.duration,
      })
    }
    console.log(pin)
  }


  const keypad = Array.from({ length: 12 }).map((_, index) => {
    let key: number | ReactNode | null = index + 1
    let action = () => handleKeypadInput(key as number)
    if (index === 9) {
      key = <Delete className="mx-auto md:size-12 landscape:size-8" />
      action = handleDeleteInput
    } else if (index === 10) {
      key = 0
    } else if (index === 11) {
      key = <CheckCircle2 className="mx-auto md:size-12 landscape:size-8" />
      action = handleSubmit
    }
    return {
      key,
      action,
    }
  })

  return {
    pin,
    keypad,
  }
}
