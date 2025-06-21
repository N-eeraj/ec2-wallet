import Form from "@/features/authentication/components/Forms/Login"
import Welcome from "@features/authentication/components/Welcome"

function Login() {
  return (
    <>
      <Welcome
        title="Welcome Back!"
        description="Please log in to access your account." />
      <Form />
    </>
  )
}

export default Login
