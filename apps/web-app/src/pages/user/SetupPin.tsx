import {
  Navigate,
} from "react-router"
import EnterPin from "@features/pin/components/EnterPin"
import useSetPin from "@features/pin/hooks/useSetPin"

function SetupPin() {
  const {
    isPinSet,
    enterPinKey,
    enterPinProps,
  } = useSetPin()
  
  if (isPinSet) return <Navigate to="/" />

  return (
    <>
      <EnterPin
        key={enterPinKey}
        {...enterPinProps} />
    </>
  )
}

export default SetupPin
