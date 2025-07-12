import {
  motion,
  AnimatePresence,
}  from "motion/react"

import {
  MenuItem,
} from "@components/Navbar"
import ProfilePicture from "@components/ProfilePicture"
import useMenu from "@hooks/useMenu"

function Menu() {
  const {
    isMenuOpen,
    menuListRef,
    isLandscape,
    navigation,
    user,
    toggleMenu,
    listMotionProps,
  } = useMenu()

  return (
    <div
      ref={menuListRef}
      className="relative flex gap-x-2 landscape:gap-x-4">
      <button
        className="flex items-center gap-x-2 md:gap-x-3 landscape:gap-x-2 duration-300"
        onClick={toggleMenu}>
        <ProfilePicture
          {...user}
          className="shrink-0 !size-8 !text-xl" />
        <strong className="shrink-0 w-fit md:text-xl landscape:text-base">
          {user?.name}
        </strong>
      </button>

      <AnimatePresence>
        {(isLandscape || isMenuOpen) && (
          <motion.ul
            {...listMotionProps}
            className="absolute landscape:relative top-[calc(100%+12px)] md:top-[calc(100%+20px)] right-0 flex flex-col landscape:flex-row gap-x-2 gap-y-1 min-w-28 bg-foreground-secondary landscape:bg-transparent py-1 rounded-b-md">
            {navigation.map((item, index) => (
              <li key={index}>
                <MenuItem {...item} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu
