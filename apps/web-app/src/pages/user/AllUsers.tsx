import {
  useState,
  type FormEvent,
} from "react"
import Input from "@components/Input"
import {
  useDebounce,
} from "@uidotdev/usehooks"

function NewTransaction() {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 400)

  return (
    <section className="flex flex-col gap-y-2">
      {debouncedSearch}
      <Input
        value={searchQuery}
        placeholder="Search user name or phone number"
        className="bg-background-secondary border border-foreground-faded/50 placeholder:font-light"
        onChange={({ target }) => setSearchQuery(target.value)} />
    </section>
  )
}

export default NewTransaction
