import {
  type Contact as ContactType,
} from "@features/transactions/hooks/useRecentContacts"
import clsx from "clsx"

interface Props extends Partial<ContactType> {
  loading?: boolean
}

function Contact({ name, phone, loading }: Props) {
  return (
    <div className="grid md:grid-cols-[auto_1fr] justify-items-center md:justify-items-start md:items-center md:gap-x-3 gap-y-2 md:gap-y-1 landscape:gap-y-0.5">
      <div className={clsx(
        "grid place-content-center md:row-span-2 w-full max-w-12 md:max-w-16 md:h-12 aspect-square bg-red-400 rounded-full",
        loading && "bg-slate-500 animate-pulse",
      )}>
        <strong className="text-3xl">
          {name?.[0]}
        </strong>
      </div>
      <span className={clsx(
          "w-full min-h-6 text-sm text-center md:text-start md:text-xl landscape:text-base md:font-bold leading-tight md:leading-snug overflow-hidden text-ellipsis",
          loading && "!md:w-3/4 bg-slate-500 rounded animate-pulse",
        )}>
        {name}
      </span>
      <span className={clsx(
          "hidden md:block min-w-28 min-h-4.5 text-foreground-faded landscape:text-sm leading-none",
          loading && "bg-slate-500 rounded-sm animate-pulse",
        )}>
        {phone}
      </span>
    </div>
  )
}

export default Contact
