import {
  useEffect,
  type ReactNode,
} from "react"

interface Props {
  leftSlot?: ReactNode
  rightSlot?: ReactNode
  onClick: (_key: string) => void
  onDelete?: () => void
  onEnter?: () => void
}

type Key = number | "left-slot" | "right-slot"

const keypad = Array.from({ length: 12 }).map((_, index) => {
  let key: Key = index + 1
  if (index === 9) {
    key = "left-slot"
  } else if (index === 10) {
    key = 0
  } else if (index === 11) {
    key = "right-slot"
  }
  return key
})

function Keypad({ leftSlot, rightSlot, onClick, onDelete, onEnter }: Props) {
  const showButton = (key: Key) => {
    if (typeof key === "number") return true
    if (key === "left-slot") return Boolean(leftSlot)
    if (key === "right-slot") return Boolean(rightSlot)
  }

  useEffect(() => {
    const handleKeypress = ({ key }: KeyboardEvent) => {
      if (key === "Backspace" || key === "Delete") {
        onDelete?.()
        return
      }
      if (key === "Enter") {
        onEnter?.()
        return
      }
      if (isNaN(Number(key))) return
      onClick(key)
    }
    document.addEventListener("keydown", handleKeypress)

    return () => document.removeEventListener("keydown", handleKeypress)
  }, [])

  return (
    <ul className="grid grid-cols-3 w-full max-w-96 mt-auto md:mt-12">
      {keypad.map((key, index) => (
        <li key={index}>
          {showButton(key) && (
            <button
              className="size-full h-[min(10vh,80px)] hover:bg-primary-hover/20 text-2xl md:text-4xl landscape:text-2xl font-bold text-center rounded duration-300"
              onClick={() => typeof key === "number" && onClick(String(key))}>
              {key === "left-slot" && leftSlot}
              {key === "right-slot" && rightSlot}
              {typeof key === "number" && key}
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Keypad
