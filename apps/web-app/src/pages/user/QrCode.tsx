import {
  useState,
} from "react"
import {
  QRCodeSVG,
} from "qrcode.react"
import Input from "@components/Input"
import userStore from "@stores/user"
import {
  currencyInput,
} from "@utils/input"

function QrCode() {
  const [amount, setAmount] = useState("")
  const user = userStore(({ user }) => user)

  const qrValue = `${user?.id}?amount=${amount}`

  return (
    <section className="flex flex-col justify-center items-center gap-y-8 pt-4">
      <div className="flex items-center gap-x-3 md:gap-x-5">
        <span className="grid place-content-center size-8 md:size-10 bg-foreground-primary text-primary-default md:text-2xl rounded-full">
          {user?.name[0]}
        </span>
        <strong className="text-xl md:text-2xl">
          {user?.name}
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
        containerProps={{
          className: "max-w-72",
        }}
        className="background-foreground-faded text-center outline-0"
        onChange={({ target }) => setAmount(target.value)}
        onInput={currencyInput} />
    </section>
  )
}

export default QrCode
