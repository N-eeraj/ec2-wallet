import {
  useState,
} from "react"
import {
  Navigate,
  useNavigate,
} from "react-router"
import EnterPin from "@features/pin/components/EnterPin"
import userStore from "@stores/user"
import {
  SETUP_ENTER_PIN,
  SETUP_RE_ENTER_PIN,
} from "@features/pin/constants"

function SetupPin() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)
  const [initialPin, setInitialPin] = useState("")

  const navigate = useNavigate()
  
  if (isPinSet) return <Navigate to="/" />

  const handlePinConfirmation = (pin: string) => {
    console.log(initialPin === pin)
  }

  return (
    <>
      {!initialPin && (
        <EnterPin
        {...SETUP_ENTER_PIN}
        onClose={() => navigate(-1)}
        onSubmit={(pin) => setInitialPin(pin)} />
      )}
      {initialPin && (
        <EnterPin
        {...SETUP_RE_ENTER_PIN}
        onClose={() => setInitialPin("")}
        onSubmit={handlePinConfirmation} />
      )}
    </>
  )
}

export default SetupPin
