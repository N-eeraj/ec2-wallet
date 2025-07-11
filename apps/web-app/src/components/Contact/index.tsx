import {
  memo,
} from "react"
import {
  NavLink,
} from "react-router"
import type {
  Contact as ContactType,
} from "@dTypes/user"
import clsx from "clsx"

interface Props extends Partial<ContactType> {
  loading?: boolean
}

function Contact({ id, name, phone, loading }: Props) {
  const hue = loading ? 0 : Math.floor(Math.random() * 360)

  return (
    <NavLink
      to={`/transactions/user/${id}`}
      className={clsx(
        "group grid justify-items-center gap-y-2 md:gap-y-1 landscape:gap-y-0.5 rounded-md",
        "@xs/contact:grid-cols-[auto_1fr] @xs/contact:justify-items-start @xs/contact:items-center @xs/contact:gap-x-3 @xs/contact:px-3 @xs/contact:py-2",
        loading ? "pointer-events-none cursor-wait" : "hover:bg-primary-default/20 duration-300",
      )}>
      <div
        className={clsx(
          "grid place-content-center w-full max-w-12 aspect-square group-hover:!hue-rotate-0 rounded-full",
          "@xs/contact:row-span-2 @xs/contact:max-w-16 @xs/contact:h-12",
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
          "w-full min-h-6 group-hover:text-primary-hover text-sm md:text-xl landscape:text-base text-center leading-tight overflow-hidden text-ellipsis",
          "@xs/contact:text-start @xs/contact:font-bold @xs/contact:leading-snug",
          loading ? "bg-slate-500 rounded animate-pulse" : "duration-300",
        )}>
        {name}
      </span>
      <span className={clsx(
          "hidden min-w-28 min-h-4.5 text-foreground-faded landscape:text-sm leading-none",
          "@xs/contact:block",
          loading && "bg-slate-500 rounded-sm animate-pulse",
        )}>
        {phone}
      </span>
    </NavLink>
  )
}

export default memo(Contact)
