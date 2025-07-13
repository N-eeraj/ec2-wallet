import PaymentContextProvider from "@features/transactions/contexts/Payment"
import BackAction from "@features/transactions/components/User/Payment/BackAction"
import Payment from "@features/transactions/components/User/Payment"
import PaymentHistory from "@features/transactions/components/User/Payment/History"

function User() {
  return (
    <section className="portrait:absolute portrait:top-0 portrait:left-0 flex portrait:flex-col gap-x-8 max-screen-view-4xl">
      <BackAction />

      <PaymentContextProvider>
        <Payment />
        <PaymentHistory />
      </PaymentContextProvider>
    </section>
  )
}

export default User
