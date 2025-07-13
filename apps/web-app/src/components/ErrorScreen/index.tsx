import Button from "@components/Button"
import {
  USER_FETCH_FAILED,
} from "@constants/messages"

const {
  title,
  message,
} = USER_FETCH_FAILED

const reload = () => location.reload()

function ErrorScreen() {
  return (
    <main className="flex flex-col justify-center md:items-center gap-y-1 md:gap-y-4 w-screen max-screen-view-4xl h-svh p-10">
      <h2 className="w-full text-foreground-faded text-7xl md:text-9xl landscape:text-8xl font-light text-start">
        {title}
      </h2>
      <span className="w-full text-foreground-faded/75 text-3xl md:text-6xl landscape:text-4xl font-light">
        {message}
      </span>
      <img
        src="/images/error-illustration.webp"
        alt="error illustration decorator"
        className="w-full max-w-xl max-h-80 mx-auto object-contain" />
      <Button
        className="w-full md:max-w-72"
        onClick={reload}>
        Refresh
      </Button>
    </main>
  )
}

export default ErrorScreen