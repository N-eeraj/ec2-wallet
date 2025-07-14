import {
  useState,
} from "react"
import {
  QRCodeSVG,
} from "qrcode.react"

import Input from "@components/Input"
import {
  currencyInput,
} from "@utils/input"
import {
  type User,
} from "@dTypes/user"

function QrCode({ id: userId, name }: User) {
  const [amount, setAmount] = useState("")

  const qrValue = `${userId}?amount=${amount}`

  return (
    <section className="flex flex-col justify-center items-center gap-y-8 pt-4">
      <div className="flex items-center gap-x-3 md:gap-x-5">
        <span className="grid place-content-center size-8 md:size-10 bg-foreground-primary text-primary-default md:text-2xl rounded-full">
          {name[0]}
        </span>
        <strong className="text-xl md:text-2xl">
          {name}
        </strong>
      </div>

      <QRCodeSVG
        value={qrValue}
        size={288}
        fgColor={"#161d26"}
        bgColor={"#f3f3f7"}
        marginSize={1} />

      <Input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        containerClassName="w-40"
        className="text-center outline-0"
        onChange={({ target }) => setAmount(target.value)}
        onInput={currencyInput} />
    </section>
  )
}

export default QrCode
