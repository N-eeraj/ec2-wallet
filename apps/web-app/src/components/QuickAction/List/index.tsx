import QuickAction from "@components/QuickAction"
import useQuickActions from "@hooks/useQuickActions"

function QuickActionList() {
  const {
    actions
  } = useQuickActions()

  return (
    <section className="landscape:order-1 space-y-2 md:space-y-1.5">
      <h3 className="text-foreground-secondary text-lg md:text-xl landscape:text-lg font-semibold">
        Quick Actions
      </h3>
      <ul className="grid grid-cols-4 gap-3 md:gap-y-2">
        {actions.map((action, index) => (
          <li key={index}>
            <QuickAction {...action} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QuickActionList
