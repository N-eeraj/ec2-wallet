import {
  useState,
} from "react"
import {
  useNavigate,
} from "react-router"
import {
  useClickAway,
} from "@uidotdev/usehooks"

import {
  constants,
  type MenuItemProps,
} from "@components/Navbar"

import userStore from "@stores/user"
import useCustomMediaQuery from "@hooks/useMediaQuery"

async function logout() {
  console.log("/logout")
}

export default function useMenu() {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuListRef = useClickAway(() => setIsMenuOpen(false))

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
      action: logout,
    },
  ] as const

  const user = userStore(state => state.user)

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
    listMotionProps: isLandscape ? {} : constants.LIST_MOTION_PROPS,
  }
}
