import AlertScreen from "@features/pin/components/AlertScreen"
import Wallet from "@components/Wallet"
import QuickAction from "@components/QuickAction"
import Contact from "@components/Contact"
import userStore from "@stores/user"

function Home() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)

  if (!isPinSet) return <AlertScreen />

  return (
    <section className="grid grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] md:grid-cols-[360px_1fr] landscape:grid-cols-[320px_min(50%,360px)] landscape:justify-between gap-4 md:gap-8 max-screen-view-4xl">
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
