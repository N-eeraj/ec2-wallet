import {
  useState,
} from "react"
import {
  toast,
} from "sonner"

import {
  PIN_DIGITS,
  PIN_LENGTH_ERROR,
} from "@features/pin/constants"

export default function useEnterPin(submitHandler: (_pin: string) => void) {
  const [pin, setPin] = useState("")

  const handleKeypadInput = (value: number | string) => {
    if (pin.length === PIN_DIGITS) return
    setPin((pin) => `${pin}${value}`.slice(0, 6))
  }

  const handleDeleteInput = () => {
    setPin(pin => pin.slice(0, -1))
  }

  const handleSubmit = () => {
    if (pin.length < PIN_DIGITS) {
      toast.error(PIN_LENGTH_ERROR.message, {
        duration: PIN_LENGTH_ERROR.duration,
      })
      return
    }
    submitHandler(pin)
  }

  return {
    pin,
    handleKeypadInput,
    handleDeleteInput,
    handleSubmit,
  }
}
