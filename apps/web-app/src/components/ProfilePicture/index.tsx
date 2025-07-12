import clsx from "clsx"
import getHue from "@utils/contactHue"
import type {
  Contact,
} from "@dTypes/user"

interface Props extends Omit<Partial<Contact>, "id"> {
  loading?: boolean
  className?: string
}

function ProfilePicture({ name, phone, loading, className }: Props) {
  const hue = (loading || !phone) ? 0 : getHue(phone)

  return (
    <div
      className={clsx(
        "grid place-content-center w-full max-w-12 aspect-square group-hover:!hue-rotate-0 text-3xl rounded-full",
        "@xs/contact:row-span-2 @xs/contact:max-w-16 @xs/contact:h-12",
        loading ? "bg-slate-500 animate-pulse" : "bg-red-300 group-hover:bg-foreground-primary group-hover:text-primary-default duration-300",
        className,
      )}
      style={{
        filter: `hue-rotate(${hue}deg)`
      }}>
      {name?.[0]}
    </div>
  )
}

export default ProfilePicture
