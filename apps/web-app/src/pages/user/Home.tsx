import AlertScreen from "@features/pin/components/AlertScreen"
import Wallet from "@components/Wallet"
import QuickAction from "@components/QuickAction"
import Contact from "@components/Contact"
import userStore from "@stores/user"

function Home() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)

  if (!isPinSet) return <AlertScreen />

  return (
    <section className="grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-4">
      <Wallet />
      <ul className="landscape:order-1">
        <li>
          <QuickAction />
        </li>
      </ul>
      <ul className="landscape:row-span-2 md:col-span-2 landscape:col-span-1">
        <li>
          <Contact />
        </li>
      </ul>
    </section>
  )
}

export default Home
