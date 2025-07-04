import {
  NavLink,
} from "react-router"
import {
  type Contact as ContactType,
} from "@features/transactions/hooks/useRecentContacts"
import clsx from "clsx"

interface Props extends Partial<ContactType> {
  loading?: boolean
}

function Contact({ id, name, phone, loading }: Props) {
  const hue = loading ? 0 : Math.floor(Math.random() * 360)

  return (
    <NavLink
      to={`/user/${id}`}
      className={clsx(
        "group grid md:grid-cols-[auto_1fr] justify-items-center md:justify-items-start md:items-center md:gap-x-3 gap-y-2 md:gap-y-1 landscape:gap-y-0.5 md:px-3 md:py-2 rounded-md",
        loading ? "pointer-events-none cursor-wait" : "hover:bg-primary-default/20 duration-300",
      )}>
      <div
        className={clsx(
          "grid place-content-center md:row-span-2 w-full max-w-12 md:max-w-16 md:h-12 aspect-square group-hover:!hue-rotate-0 rounded-full",
          loading ? "bg-slate-500 animate-pulse" : "bg-red-300 group-hover:bg-foreground-primary group-hover:text-primary-default duration-300",
        )}
        style={{
          filter: `hue-rotate(${hue}deg)`
        }}>
        <strong className="text-3xl">
          {name?.[0]}
        </strong>
      </div>
      <span className={clsx(
          "w-full min-h-6 group-hover:text-primary-hover text-sm md:text-xl landscape:text-base text-center md:text-start md:font-bold leading-tight md:leading-snug overflow-hidden text-ellipsis",
          loading ? "!md:w-3/4 bg-slate-500 rounded animate-pulse" : "duration-300",
        )}>
        {name}
      </span>
      <span className={clsx(
          "hidden md:block min-w-28 min-h-4.5 text-foreground-faded landscape:text-sm leading-none",
          loading && "bg-slate-500 rounded-sm animate-pulse",
        )}>
        {phone}
      </span>
    </NavLink>
  )
}

export default Contact
