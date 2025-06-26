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
import Cookies from "js-cookie"
import {
  useClickAway,
} from "@uidotdev/usehooks"
import {
  toast,
} from "sonner"

import {
  type MenuItemProps,
} from "@components/Navbar"

import userStore from "@stores/user"
import loaderStore from "@stores/loader"
import useCustomMediaQuery from "@hooks/useMediaQuery"
import request from "@lib/axios"
import {
  getErrorMessage,
} from "@utils/request"
import {
  MENU_LIST_MOTION_PROPS
} from "@constants/navbar"

async function logout() {
  await request.post("/logout")
}

export default function useMenu() {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuListRef = useClickAway(() => setIsMenuOpen(false))

  const {
    mutate: logoutMutate,
    isPending: logoutLoading,
  } = useMutation({
    mutationFn: logout,
    onError: (error) => {
      toast.error(getErrorMessage(error))
    },
    onSuccess: () => {
      clearUser()
      Cookies.remove("authToken")
    }
  })

  const startLoading = loaderStore(({ startLoading }) => startLoading)
  const stopLoading = loaderStore(({ stopLoading }) => stopLoading)
  useEffect(() => {
    if (logoutLoading) {
      startLoading()
    } else {
      stopLoading()
    }
  }, [
    logoutLoading,
  ])

  const {
    isLandscape,
  } = useCustomMediaQuery()

  const navigation: Array<MenuItemProps> = [
    {
      text: "Profile",
      action: () => navigate("/profile"),
    },
    {
      text: "Settings",
      action: () => navigate("/settings"),
    },
    {
      text: "Logout",
      action: logoutMutate,
    },
  ] as const

  const user = userStore(({ user }) => user)
  const clearUser = userStore(({ clearUser }) => clearUser)

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state)
  }

  return {
    isMenuOpen,
    menuListRef,
    isLandscape,
    navigation,
    user,
    toggleMenu,
    listMotionProps: isLandscape ? {} : MENU_LIST_MOTION_PROPS,
  }
}
