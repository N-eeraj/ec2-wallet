import ViewToggle from "@features/transactions/components/User/Payment/ViewToggle"
import Form from "@features/transactions/components/User/Payment/Form"
import Success from "@features/transactions/components/User/Payment/Success"
import usePaymentView from "@features/transactions/hooks/usePaymentView"

import ProfilePicture from "@components/ProfilePicture"
import SkeletonWrapper from "@components/SkeletonWrapper"
import clsx from "clsx"

function UserPayment() {
  const {
    user,
    isFetching,
    isSuccess,
    backToPaymentView,
  } = usePaymentView()

  if (isSuccess) {
    return (
      <Success />
    )
  }

  return (
    <section
      className="portrait:order-1 portrait:flex-1 flex flex-col items-center gap-y-4 md:portrait:gap-y-8 landscape:flex-1 w-full pt-4 md:portrait:pt-6 landscape:pt-0 portrait:px-4"
      onClick={backToPaymentView}>

      <ViewToggle />

      <div className="flex flex-col items-center gap-y-2 md:gap-y-3 w-full portrait:mt-[min(5vh,100px)] landscape:mt-0 ">
        <ProfilePicture
          {...user}
          loading={isFetching}
          className="md:portrait:max-w-16" />

        <div className={clsx(
          "flex items-center",
          isFetching && "gap-x-1",
        )}>
          Paying&nbsp;
          <SkeletonWrapper
            loading={isFetching}
            containerClassName="shrink-0 w-32 h-6">
            <strong>
              {user?.name}
            </strong>
          </SkeletonWrapper>
        </div>
      </div>

      <Form />
    </section>
  )
}

export default UserPayment
