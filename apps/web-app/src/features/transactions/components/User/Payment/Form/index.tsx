import {
  useSearchParams,
} from "react-router"
import Input from "@components/Input"
import Button from "@components/Button"
import {
  ArrowRight,
} from "lucide-react"
import {
  currencyInput,
} from "@utils/input"

function Form() {
  const [searchParams] = useSearchParams()

  return (
    <form className="flex flex-col items-center gap-y-3 md:portrait:gap-y-4">
      <Input
        placeholder="Amount"
        containerClassName="w-40"
        autoFocus
        className="text-xl md:portrait:text-3xl text-center outline-0"
        onInput={currencyInput} />

      <textarea
        placeholder="Add note"
        className="max-w-40 h-8 md:portrait:h-9 p-2 bg-background-secondary text-xs md:portrait:text-sm text-center rounded-sm resize-none wrap-anywhere" />

      <Button className="max-md:fixed max-md:bottom-4 max-md:right-4 flex justify-center items-center gap-x-2 md:w-full max-w-40 max-md:aspect-square mt-3 !rounded-md">
        <span className="max-md:hidden">
          Pay
        </span>
        <ArrowRight className="md:hidden size-5" />
      </Button>
    </form>
  )
}

export default Form
