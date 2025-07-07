import {
  useNavigate,
} from "react-router"
import QrScanner from "react-qr-barcode-scanner"

function Scanner() {
  const navigate = useNavigate()

  const handleScan = (_error: unknown, result: unknown) => {
    if (result && typeof result === "object" && "text" in result) {
      navigate(`/transactions/user/${result.text}`)
    }
  }

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-center items-center size-full bg-black z-20">
      <div className="relative w-3/4 max-w-72 md:max-w-96 [&>video]:aspect-square [&>video]:object-cover">
        <div className="absolute -top-4 -left-4 size-1/4 border-t-6 border-l-6 border-t-primary-default border-l-primary-default rounded-tl-md" />
        <div className="absolute -top-4 -right-4 size-1/4 border-t-6 border-r-6 border-t-primary-default border-r-primary-default rounded-tr-md" />
        <div className="absolute -bottom-4 -right-4 size-1/4 border-b-6 border-r-6 border-b-primary-default border-r-primary-default rounded-br-md" />
        <div className="absolute -bottom-4 -left-4 size-1/4 border-b-6 border-l-6 border-b-primary-default border-l-primary-default rounded-bl-md" />
        <QrScanner onUpdate={handleScan} />
      </div>
    </section>
  )
}

export default Scanner
