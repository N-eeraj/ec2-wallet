import Form from "@features/auth/components/Forms/Register"
import Welcome from "@features/auth/components/Welcome"

function Register() {
  return (
    <>
      <Welcome
        title="Welcome Aboard!"
        description="Create an account to get started." />
      <Form />
    </>
  )
}

export default Register
