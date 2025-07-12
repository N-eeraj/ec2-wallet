import useUserPayment from "@features/transactions/hooks/useUserPayment"

function UserPayment() {
  const {
    data,
    isFetching,
    searchParams,
  } = useUserPayment()

  return (
    <section>
      Pay {data?.name} {searchParams.get("amount")}
    </section>
  )
}

export default UserPayment
