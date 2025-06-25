export interface Props {
  text: string
  action: () => void
}

function Item({ text, action }: Props) {
  return (
    <button
      className="size-full px-2 md:px-3 landscape:px-1 py-1 md:py-1.5 font-light hover:text-primary-default text-sm md:text-base text-start duration-300"
      onClick={action}>
      {text}
    </button>
  )
}

export default Item
