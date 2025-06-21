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
import request from "@lib/axios"
import {
  getErrorMessage,
} from "@utils/request"

interface Params<FormShape extends ZodRawShape> {
  schema: ZodObject<FormShape>
  endpoint: string
}

export default function useAuth<FormShape extends ZodRawShape>({ schema, endpoint }: Params<FormShape>) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = handleSubmit(
    async (body) => {
      try {
        const data = await request.post(endpoint, {
          body,
        })
      } catch(error) {
        const message = getErrorMessage(error)
        console.log(message)
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
