import {
  NavLink,
} from "react-router"
import {
  MoveLeft,
} from "lucide-react"

function BackAction() {
  return (
    <NavLink
      to="/users"
      className="portrait:pt-4 portrait:pl-4">
      <button>
        <MoveLeft size={20} />
      </button>
    </NavLink>
  )
}

export default BackAction
