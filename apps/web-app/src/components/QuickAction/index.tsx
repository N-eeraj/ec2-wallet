import {
  type MouseEventHandler,
} from "react"
import {
  type LucideIcon,
} from "lucide-react"

interface Props {
  label: string
  icon: LucideIcon
  action: MouseEventHandler
}

function QuickActionItem({ label, icon: Icon, action }: Props) {
  return (
    <button
      className="group flex flex-col items-center gap-y-2 size-full p-2 hover:bg-background-secondary/50 rounded-sm duration-300"
      onClick={action}>
      <Icon className="group-hover:text-primary-hover fill-background-secondary group-hover:fill-primary-default/30 group-hover:scale-110 duration-300" />
      <small className="text-foreground-secondary/75 md:text-base landscape:text-xs">
        {label}
      </small>
    </button>
  )
}

export default QuickActionItem
