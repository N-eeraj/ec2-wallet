import {
  useState,
} from "react"
import {
  useNavigate,
} from "react-router"
import userStore from "@stores/user"
import {
  SETUP_ENTER_PIN,
  SETUP_RE_ENTER_PIN,
  PIN_MISMATCH_ERROR,
} from "@features/pin/constants"
import {
  toast,
} from "sonner"

export default function useSetPin() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)
  const [initialPin, setInitialPin] = useState("")

  const navigate = useNavigate()

  const handlePinConfirmation = (pin: string) => {
    if (initialPin !== pin) {
      toast.error(PIN_MISMATCH_ERROR)
      return
    }
    console.log("call set PIN API with PIN: ", pin)
  }

  const enterPinProps = initialPin ? ({
    ...SETUP_RE_ENTER_PIN,
    onClose: () => setInitialPin(""),
    onSubmit: handlePinConfirmation,
  }) : ({
    ...SETUP_ENTER_PIN,
    onClose: () => navigate(-1),
    onSubmit: (pin: string) => setInitialPin(pin),
  })

  return {
    isPinSet,
    enterPinKey: `${Boolean(initialPin)}`,
    enterPinProps,
  }
}
