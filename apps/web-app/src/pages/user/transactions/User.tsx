import Navbar from "@features/transactions/components/User/Payment/Navbar"
import UserPayment from "@features/transactions/components/User/Payment"

function User() {
  return (
    <section className="flex flex-col gap-y-4">
      <Navbar />
      <UserPayment />
    </section>
  )
}

export default User
