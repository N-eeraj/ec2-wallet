import {
  Brand,
  Menu,
} from "@components/Navbar"

function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center w-full min-h-12 px-5 md:px-10 py-3 md:py-5 landscape:py-4 bg-foreground-primary text-foreground-primary-inverted z-10">
      <Brand />
      <Menu />
    </nav>
  )
}

export default Navbar
