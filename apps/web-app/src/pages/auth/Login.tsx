import Welcome from "@features/authentication/components/Welcome"

function Login() {
  return (
    <>
      <Welcome
        title="Welcome Back!"
        description="Please log in to access your account." />
      <form className="w-full">
        <input className="w-full border border-foreground-faded/20" />
        <input className="w-full border border-foreground-faded/20" />
      </form>
    </>
  )
}

export default Login
