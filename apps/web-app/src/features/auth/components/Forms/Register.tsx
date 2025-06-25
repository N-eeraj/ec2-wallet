import {
  type FieldError,
} from "react-hook-form"

import {
  formSchema,
} from "@features/auth/schemas/register"
import useAuth from "@features/auth/hooks/useAuth"

import Input from "@components/Input"
import Button from "@components/Button"
import ErrorMessage from "@components/ErrorMessage"
import {
  onPhoneInput,
} from "@utils/input"

function RegisterForm() {
  const {
    register,
    errors,
    onSubmit,
    isSubmitting,
  } = useAuth({
    schema: formSchema,
    endpoint: "/register",
  })

  return (
    <form
      className="flex flex-col items-center gap-y-4 w-full"
      onSubmit={onSubmit}>
      <Input
        {...register("name")}
        placeholder="Enter your name"
        errors={errors.name}
        className="border border-foreground-faded/20" />

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
        Register
      </Button>

      <ErrorMessage errors={errors.root as FieldError} />
    </form>
  )
}

export default RegisterForm
