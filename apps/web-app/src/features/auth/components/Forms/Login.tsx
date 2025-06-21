import {
  type FieldError,
} from "react-hook-form"

import {
  formSchema,
} from "@features/auth/schemas/login"
import useAuth from "@features/auth/hooks/useAuth"

import Input from "@components/Input"
import Button from "@components/Button"
import ErrorMessage from "@components/Error"
import {
  onPhoneInput,
} from "@utils/input"

function LoginForm() {
  const {
    register,
    errors,
    onSubmit,
    isSubmitting,
  } = useAuth({
    schema: formSchema,
    endpoint: "/login",
  })

  return (
    <form
      className="flex flex-col items-center gap-y-4 w-full"
      onSubmit={onSubmit}>
      <Input
        {...register("phone")}
        type="tel"
        placeholder="Enter your phone number"
        errors={errors.phone}
        className="border border-foreground-faded/20"
        onInput={onPhoneInput} />

      <Input
        {...register("password")}
        type="password"
        placeholder="Enter your password"
        errors={errors.password}
        className="border border-foreground-faded/20" />

      <Button
        loading={isSubmitting}
        className="w-full">
        Login
      </Button>

      <ErrorMessage errors={errors.root as FieldError} />
    </form>
  )
}

export default LoginForm
