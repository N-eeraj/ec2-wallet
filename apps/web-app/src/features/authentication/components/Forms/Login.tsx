import Input from "@components/Input"
import Button from "@components/Button"

function LoginForm() {
  return (
    <form className="flex flex-col items-center gap-y-4 w-full">
      <Input
        type="tel"
        placeholder="Phone"
        className="border border-foreground-faded/20" />
      <Input
        type="password"
        placeholder="Password"
        className="border border-foreground-faded/20" />
      <Button
        className="w-full">
        Login
      </Button>
    </form>
  )
}

export default LoginForm
