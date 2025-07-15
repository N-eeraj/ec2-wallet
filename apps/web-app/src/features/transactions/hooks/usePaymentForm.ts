import {
  useParams,
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
import request from "@lib/axios"
import {
  getFormErrors,
  getErrorMessage,
} from "@utils/request"
import type {
  FormErrorPath,
} from "@dTypes/form"

export default function usePaymentForm() {
  const {
    userId,
  } = useParams()
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
        await request.post("/transactions", {
          ...body,
          userId,
        })
      } catch (error) {
        const formErrors = getFormErrors(error)
        if (formErrors) {
          Object.entries(formErrors)
            .forEach(([field, message]) => {
              setError(field as FormErrorPath<typeof schema>, { 
                message,
              })
            })
        } else {
          setError("root", {
            message: getErrorMessage(error),
          })
        }
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
