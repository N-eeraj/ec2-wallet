import {
  useForm,
  type SubmitHandler,
} from "react-hook-form"
import {
  zodResolver,
} from "@hookform/resolvers/zod"
import z from "zod/v4"

const schema = z.object({
  phone: z.string({ error: "Please enter your phone number" })
    .regex(/^\d{10,11}$/, {
      error: "Please enter a valid phone number",
    }),
  password: z.string({ error: "Please enter your password" })
    .min(1, { error: "Please enter your password" }),
})

import Input from "@components/Input"
import Button from "@components/Button"

function LoginForm() {
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

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async ({ phone, password }) => {
    console.log(phone, password)
  }

  return (
    <form
      className="flex flex-col items-center gap-y-4 w-full"
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("phone")}
        type="tel"
        placeholder="Phone"
        errors={errors.phone}
        className="border border-foreground-faded/20" />

      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        errors={errors.password}
        className="border border-foreground-faded/20" />

      <Button
        loading={isSubmitting}
        className="w-full">
        Login
      </Button>
    </form>
  )
}

export default LoginForm
