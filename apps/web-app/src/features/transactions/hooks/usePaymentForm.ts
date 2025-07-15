import {
  useSearchParams,
} from "react-router"
import {
  useForm,
} from "react-hook-form"
import {
  zodResolver,
} from "@hookform/resolvers/zod"
import {
  schema,
} from "@features/transactions/schemas/payment"

export default function usePaymentForm() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: String(Number(searchParams.get("amount")) || ""),
    },
  })

  const onSubmit = handleSubmit(
    async (body) => {
      try {
        clearErrors()
        console.log(body)
      } catch (error) {

      }
    }
  )

  return {
    register,
    onSubmit,
    errors,
    isSubmitting,
  }
}
