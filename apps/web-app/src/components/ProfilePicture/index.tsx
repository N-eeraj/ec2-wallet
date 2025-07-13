import SkeletonWrapper from "@components/SkeletonWrapper"
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
    <SkeletonWrapper
      loading={loading}
      circle
      containerClassName={clsx(
        "w-full max-w-12 aspect-square",
        "@xs/contact:row-span-2 @xs/contact:max-w-16 @xs/contact:h-12",
        className,
      )}>
      <div
        className={clsx(
          "grid place-content-center w-full max-w-12 aspect-square bg-red-300 group-hover:bg-foreground-primary group-hover:text-primary-default text-3xl group-hover:!hue-rotate-0 rounded-full duration-300",
          "@xs/contact:row-span-2 @xs/contact:max-w-16 @xs/contact:h-12",
          className,
        )}
        style={{
          filter: `hue-rotate(${hue}deg)`
        }}>
        {name?.[0]}
      </div>
    </SkeletonWrapper>
  )
}

export default ProfilePicture
