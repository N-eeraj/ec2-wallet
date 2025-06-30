import {
  useState,
  useEffect,
} from "react"
import {
  useNavigate,
} from "react-router"
import {
  useMutation,
} from "@tanstack/react-query"
import {
  queryClient,
} from "@/QueryClient"

import userStore from "@stores/user"
import loaderStore from "@stores/loader"
import request from "@lib/axios"
import {
  toast,
} from "sonner"
import {
  SETUP_ENTER_PIN,
  SETUP_RE_ENTER_PIN,
  PIN_MISMATCH_ERROR,
} from "@features/pin/constants"
import {
  getErrorMessage,
} from "@utils/request"

export default function useSetPin() {
  const isPinSet = userStore(({ user }) => user?.isPinSet)
  const [initialPin, setInitialPin] = useState("")
  const startLoading = loaderStore(({ startLoading }) => startLoading)
  const stopLoading = loaderStore(({ stopLoading }) => stopLoading)

  const navigate = useNavigate()
  const setPin = async () => {
    await request.patch("/user/pin", {
      pin: initialPin,
    })
  }

  const {
    mutate,
    isPending,
  } = useMutation({
    mutationFn: setPin,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          "user",
        ],
      })
      navigate(-1)
    },
    onError: (error) => {
      toast.error(getErrorMessage(error))
    },
  })

  useEffect(() => {
    if (isPending) {
      startLoading()
    } else {
      stopLoading()
    }
  }, [isPending])

  const handlePinConfirmation = (pin: string) => {
    if (initialPin !== pin) {
      toast.error(PIN_MISMATCH_ERROR)
      return
    }
    mutate()
  }

  const enterPinProps = initialPin ? ({
    ...SETUP_RE_ENTER_PIN,
    onClose: () => setInitialPin(""),
    onSubmit: handlePinConfirmation,
  }) : ({
    ...SETUP_ENTER_PIN,
    onClose: () => navigate(-1),
    onSubmit: (pin: string) => setInitialPin(pin),
  })

  return {
    isPinSet,
    enterPinKey: `${Boolean(initialPin)}`,
    enterPinProps,
  }
}
