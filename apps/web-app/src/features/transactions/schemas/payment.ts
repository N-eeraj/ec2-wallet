import {
  z,
} from "zod/v4"
import currencyFormat from "@utils/currencyFormat"
import {
  MAX_AMOUNT,
} from "@features/transactions/constants"

export const schema = z.object({
  amount: z.preprocess(Number,
    z.number({
      error: "Please enter an amount",
    })
    .min(1, {
      error: "Please enter an amount",
    })
    .max(MAX_AMOUNT, {
      error: `Please enter an amount less than ${currencyFormat(MAX_AMOUNT)}`,
    })
  ),
  notes: z.string()
    .optional(),
})
