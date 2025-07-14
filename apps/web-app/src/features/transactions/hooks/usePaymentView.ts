import {
  use,
} from "react"
import {
  useParams,
} from "react-router"
import {
  useQuery,
} from "@tanstack/react-query"

import {
  PaymentContext,
  PaymentView,
} from "@features/transactions/contexts/Payment"
import request from "@lib/axios"
import type {
  User,
} from "@dTypes/user"

async function fetchUser(id: User["id"]): Promise<User> {
  const {
    data,
  } = await request.get(`/get-user/${id}`)
  return data.data
}

export default function usePaymentView() {
  const params = useParams()

  const {
    setView,
  } = use(PaymentContext)

  const userId = params.userId as User["id"]

  const {
    data,
    isFetching,
  } = useQuery({
    queryKey: [
      "user",
      userId,
    ],
    queryFn: ({ queryKey: [_, id] }) => fetchUser(id)
  })

  const backToPaymentView = () => {
    setView(PaymentView.PAYMENT)
  }

  return {
    user: data,
    isFetching,
    backToPaymentView,
  }
}
