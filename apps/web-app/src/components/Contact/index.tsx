import {
  memo,
} from "react"
import {
  NavLink,
} from "react-router"

import ProfilePicture from "@components/ProfilePicture"
import SkeletonWrapper from "@components/SkeletonWrapper"
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

      <SkeletonWrapper
        loading={loading}
        containerClassName="w-5/6 h-5.5 md:portrait:h-[27.5]">
        <span className={clsx(
            "w-full group-hover:text-primary-hover md:portrait:text-xl text-center leading-tight overflow-hidden text-ellipsis duration-300",
            "@xs/contact:text-start @xs/contact:font-bold @xs/contact:leading-snug",
          )}>
          {name}
        </span>
      </SkeletonWrapper>

      <SkeletonWrapper
        loading={loading}
        containerClassName="w-28 h-3.5 md:portrait:h-4">
        <span className={clsx(
            "hidden min-w-28 text-foreground-faded text-sm md:portrait:text-base leading-none",
            "@xs/contact:block",
          )}>
          {phone}
        </span>
      </SkeletonWrapper>
    </NavLink>
  )
}

export default memo(Contact)
