import { Outlet } from "react-router"

function Auth() {
  return (
    <main className="flex flex-col justify-end landscape:justify-center items-center gap-y-6 sm:gap-y-12 h-svh sm:p-12 bg-background-secondary">
      <div className="flex items-center gap-x-2 sm:gap-x-4 flex-1 landscape:flex-none">
        <img
          src="/images/logo.svg"
          alt="ec2-wallet-logo"
          className="w-10 sm:w-20" />
        <h1 className="text-3xl sm:text-5xl">
          Wallet
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-xl min-h-3/4 mt-auto sm:mt-0 px-3 py-5 bg-background-primary rounded-t-4xl sm:rounded-4xl md:rounded-2xl shadow-2xl sm:shadow-md md:shadow-sm">
        <Outlet />
      </div>
    </main>
  )
}

export default Auth
