import {
  NavLink,
} from "react-router"
import {
  MoveLeft,
  ChevronDown,
} from "lucide-react"

function Navbar() {
  return (
      <div className="relative flex justify-center items-center">
        <NavLink
          to="/users"
          className="absolute left-0">
          <button>
            <MoveLeft size={20} />
          </button>
        </NavLink>
        <button className="flex items-center gap-x-1.5 px-4 py-1.5 bg-background-secondary text-xs font-light border border-foreground-disabled rounded-full">
          <span>
            View History
          </span>
          <ChevronDown size={12} />
        </button>
      </div>
  )
}

export default Navbar
