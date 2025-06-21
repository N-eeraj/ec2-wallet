import Form from "@features/auth/components/Forms/Login"
import Welcome from "@features/auth/components/Welcome"

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
