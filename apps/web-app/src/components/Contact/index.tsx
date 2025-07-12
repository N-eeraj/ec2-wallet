import {
  memo,
} from "react"
import {
  NavLink,
} from "react-router"

import ProfilePicture from "@components/ProfilePicture"
import type {
  Contact as ContactType,
} from "@dTypes/user"
import clsx from "clsx"

interface Props extends Partial<ContactType> {
  loading?: boolean
}

function Contact({ id, name, phone, loading }: Props) {
  return (
    <NavLink
      to={`/transactions/user/${id}`}
      className={clsx(
        "group grid justify-items-center gap-y-2 md:gap-y-1 landscape:gap-y-0.5 rounded-md",
        "@xs/contact:grid-cols-[auto_1fr] @xs/contact:justify-items-start @xs/contact:items-center @xs/contact:gap-x-3 @xs/contact:px-3 @xs/contact:py-2",
        loading ? "pointer-events-none cursor-wait" : "hover:bg-primary-default/20 duration-300",
      )}>

      <ProfilePicture
        name={name}
        phone={phone}
        loading={loading} />

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
