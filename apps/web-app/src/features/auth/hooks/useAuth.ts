import {
  useForm,
} from "react-hook-form"
import {
  zodResolver,
} from "@hookform/resolvers/zod"
import {
  type ZodObject,
  type ZodRawShape,
} from "zod/v4"
import Cookies from "js-cookie"
import userStore from "@stores/user"
import request from "@lib/axios"
import {
  getErrorMessage,
  getFormErrors,
} from "@utils/request"

interface Params<FormShape extends ZodRawShape> {
  schema: ZodObject<FormShape>
  endpoint: string
}

export default function useAuth<FormShape extends ZodRawShape>({ schema, endpoint }: Params<FormShape>) {
  const setUser = userStore(({ setUser }) => setUser)

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
  })

  const onSubmit = handleSubmit(
    async (body) => {
      try {
        clearErrors()
        const { data } = await request.post(endpoint, body)
        Cookies.set("authToken", data.data.token)
        setUser(data.data)
      } catch (error) {
        const formErrors = getFormErrors(error)
        if (formErrors) {
          formErrors
            .forEach(({ field, message }) => {
              setError(field, { message })
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
    errors,
    onSubmit,
    isSubmitting,
  }
}
