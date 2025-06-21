import Welcome from "@features/authentication/components/Welcome"

function Register() {
  return (
    <>
      <Welcome
        title="Welcome Aboard!"
        description="Create an account to get started." />
      <form className="w-full">
        <input className="w-full border border-foreground-faded/20" />
        <input className="w-full border border-foreground-faded/20" />
        <input className="w-full border border-foreground-faded/20" />
      </form>
    </>
  )
}

export default Register
