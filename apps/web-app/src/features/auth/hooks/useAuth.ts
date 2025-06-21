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
    async (payload) => {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
      })
    }
  )

  return {
    register,
    errors,
    onSubmit,
    isSubmitting,
  }
}
