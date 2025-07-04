interface Props {
  title: string
  description: string
}

function Welcome({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center landscape:items-start w-full">
      <h2 className="text-2xl sm:text-3xl landscape:text-2xl font-bold duration-500">
        {title}
      </h2>
      <p className="text-foreground-faded text-sm sm:text-base landscape:text-sm duration-500">
        {description}
      </p>
    </div>
  )
}

export default Welcome
