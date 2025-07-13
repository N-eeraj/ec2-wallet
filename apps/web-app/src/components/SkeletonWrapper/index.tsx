import {
  type PropsWithChildren,
} from "react"
import Skeleton, {
  type SkeletonProps,
} from "react-loading-skeleton"
import clsx from "clsx"

interface Props extends SkeletonProps {
  loading?: boolean
}

function SkeletonWrapper({ loading, children, containerClassName, className, ...props }: Props & PropsWithChildren) {
  return (
    loading ?
      <Skeleton
        {...props}
        containerClassName={clsx(
          "leading-none",
          containerClassName,
        )}
        className={clsx(
          "h-full",
          className,
        )} /> :
      children
  )
}

export default SkeletonWrapper
