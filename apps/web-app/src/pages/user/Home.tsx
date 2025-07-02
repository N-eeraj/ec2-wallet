import AlertScreen from "@features/pin/components/AlertScreen"
import Wallet from "@features/wallet/components/Balance"
import QuickAction from "@components/QuickAction"
import RecentContacts from "@features/transactions/components/RecentContacts"
import userStore from "@stores/user"

function Home() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)

  if (!isPinSet) return <AlertScreen />

  return (
    <section className="grid grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] md:grid-cols-[360px_1fr] landscape:grid-cols-[320px_min(50%,360px)] landscape:justify-between gap-4 md:gap-8 max-screen-view-4xl">
      <Wallet />

      <section className="landscape:order-1">
        <ul>
          <li>
            <QuickAction />
          </li>
        </ul>
      </section>

      <RecentContacts />
    </section>
  )
}

export default Home
