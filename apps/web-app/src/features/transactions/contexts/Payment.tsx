import {
  createContext,
  useState,
  type PropsWithChildren,
} from "react"

export type PaymentView = "payment" | "history"

interface ContextValues {
  view: PaymentView
  setView: (_view: PaymentView) => void
}

const INITIAL_VIEW: PaymentView = "payment"

export const PaymentContext = createContext<ContextValues>({
  view: INITIAL_VIEW,
  setView: () => {}
})

function PaymentContextProvider({ children }: PropsWithChildren) {
  const [view, setView] = useState<PaymentView>(INITIAL_VIEW)

  const value = {
    view,
    setView,
  }

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContextProvider
