function Logo() {
  return (
    <div className="flex items-center gap-x-2 sm:gap-x-4 flex-1 landscape:flex-none duration-500">
      <img
        src="/images/logo.svg"
        alt="ec2-wallet-logo"
        className="w-10 sm:w-20" />
      <h1 className="text-3xl sm:text-5xl">
        Wallet
      </h1>
    </div>
  )
}

export default Logo
