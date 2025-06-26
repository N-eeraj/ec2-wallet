import {
  Loader2,
} from "lucide-react"
import loaderStore from "@stores/loader"

function Loader() {
  const loadingCount = loaderStore(({ loadingCount }) => loadingCount)

  if (!loadingCount) return

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-svh bg-foreground-primary/40 backdrop-blur-sm z-50">
      <div className="flex flex-col justify-center items-center gap-y-2 w-11/12 max-w-md aspect-[2] p-4 bg-background-primary rounded-lg">
        <strong className="text-xl">
          Loading
        </strong>
        <Loader2
          className="size-20 text-primary-default animate-spin" />
      </div>
    </div>
  )
}

export default Loader
