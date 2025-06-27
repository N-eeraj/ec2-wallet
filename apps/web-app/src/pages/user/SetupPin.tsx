import {
  Navigate,
} from "react-router"
import EnterPin from "@features/pin/components/EnterPin"
import userStore from "@stores/user"

function SetupPin() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)
  
  if (isPinSet) return <Navigate to="/" />

  return (
    <EnterPin />
  )
}

export default SetupPin
