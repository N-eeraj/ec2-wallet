import ProfilePicture from "@components/ProfilePicture"
import useUserPayment from "@features/transactions/hooks/useUserPayment"

function UserPayment() {
  const {
    user,
    isFetching,
    searchParams,
  } = useUserPayment()

  return (
    <section className="flex flex-col items-center gap-y-2">
      <ProfilePicture
        {...user}
        loading={isFetching} />

      <div>
        Paying&nbsp;
        <strong>
          {user?.name}
        </strong>
      </div>

      {searchParams.get("amount")}
    </section>
  )
}

export default UserPayment
