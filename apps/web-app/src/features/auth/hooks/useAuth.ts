import {
  useForm,
} from "react-hook-form"
import {
  zodResolver,
} from "@hookform/resolvers/zod"
import {
  type ZodObject,
  type ZodRawShape,
} from "zod"
import request from "@lib/axios"
import {
  toast,
} from "sonner"
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
        console.log(data)
      } catch(error) {
        toast.error(getErrorMessage(error))
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
