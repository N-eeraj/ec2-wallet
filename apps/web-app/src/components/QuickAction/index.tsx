import {
  type ForwardRefExoticComponent,
  type MouseEventHandler,
} from "react"

interface Props {
  label: string
  icon: ForwardRefExoticComponent<any>
  action: MouseEventHandler
}

function QuickActionItem({ label, icon: Icon, action }: Props) {
  return (
    <button
      className="group flex flex-col items-center gap-y-2 size-full p-2 hover:bg-primary-default/10 rounded-sm duration-300"
      onClick={action}>
      <Icon className="text-primary-default fill-background-secondary group-hover:fill-primary-default/30 duration-300" />
      <small className="text-foreground-secondary/75">
        {label}
      </small>
    </button>
  )
}

export default QuickActionItem
