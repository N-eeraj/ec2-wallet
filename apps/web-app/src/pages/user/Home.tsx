import AlertScreen from "@features/pin/components/AlertScreen"
import userStore from "@stores/user"

function Home() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)

  if (!isPinSet) return <AlertScreen />

  return (
    <div>Home</div>
  )
}

export default Home
