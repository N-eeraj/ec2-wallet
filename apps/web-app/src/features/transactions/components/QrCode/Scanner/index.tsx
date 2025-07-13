import {
  useNavigate,
} from "react-router"
import QrScanner from "react-qr-barcode-scanner"

import {
  SCANNER_DECORATION_BORDER_CLASSES,
} from "@features/transactions/constants"
import {
  X,
} from "lucide-react"
import clsx from "clsx"

function Scanner() {
  const navigate = useNavigate()

  const handleScan = (_error: unknown, result: unknown) => {
    if (result && typeof result === "object" && "text" in result) {
      navigate(`/transactions/user/${result.text}`)
    }
  }

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-center items-center size-full bg-black z-20">
      <button
        className="fixed top-4 left-4"
        onClick={() => navigate(-1)}>
        <X className="size-8 text-foreground-primary-inverted" />
      </button>

      <div className="relative w-3/4 max-w-72 md:max-w-96 [&>video]:aspect-square [&>video]:object-cover">
        {SCANNER_DECORATION_BORDER_CLASSES.map((className, index) => (
          <div
            key={index}
            className={clsx(
              "absolute size-1/4",
              className,
            )} />
        ))}

        <QrScanner onUpdate={handleScan} />
      </div>
    </section>
  )
}

export default Scanner
