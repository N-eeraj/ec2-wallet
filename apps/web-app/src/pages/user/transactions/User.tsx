import {
  useParams,
  useSearchParams,
} from "react-router"

function User() {
  const params = useParams()
  const [searchParams] = useSearchParams()

  return (
    <section>
      Pay {params.userId} {searchParams.get("amount")}
    </section>
  )
}

export default User