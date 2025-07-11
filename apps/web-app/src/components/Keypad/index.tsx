import {
  useEffect,
} from "react"
import {
  Delete,
  CheckCircle2,
} from "lucide-react"

interface Props {
  onClick: (_key: string) => void
  onDelete: () => void
  onSubmit: () => void
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

function Keypad({ onClick, onDelete, onSubmit }: Props) {
  useEffect(() => {
    const handleKeypress = ({ key }: KeyboardEvent) => {
      if (key === "Backspace" || key === "Delete") {
        onDelete?.()
        return
      }
      if (isNaN(Number(key))) return
      onClick(key)
    }
    document.addEventListener("keydown", handleKeypress)

    return () => document.removeEventListener("keydown", handleKeypress)
  }, [
    onDelete,
    onClick,
  ])

  const handleClick = (key: Key) => {
    if (typeof key === "number") {
      onClick(String(key))
    } else if (key === "left-slot") {
      onDelete?.()
    } else if (key === "right-slot") {
      onSubmit?.()
    }
  }

  return (
    <ul className="grid grid-cols-3 w-full max-w-96 mt-auto md:mt-12">
      {keypad.map((key, index) => (
        <li key={index}>
          <button
            className="size-full h-[min(10vh,80px)] hover:bg-primary-hover/20 text-2xl md:text-4xl landscape:text-2xl font-bold text-center rounded duration-300"
            onClick={() => handleClick(key)}>
            {key === "left-slot" && (
              <Delete className="mx-auto md:size-12 landscape:size-8" />
            )}
            {key === "right-slot" && (
              <CheckCircle2 className="mx-auto md:size-12 landscape:size-8" />
            )}
            {typeof key === "number" && key}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Keypad
