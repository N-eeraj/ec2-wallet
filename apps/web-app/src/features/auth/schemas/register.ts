import { z } from "zod"

import {
  MIN_NAME_LENGTH,
  MIN_PHONE_LENGTH,
  MAX_PHONE_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@features/auth/constants"

const phoneRegex = new RegExp(`^\\d{${MIN_PHONE_LENGTH},${MAX_PHONE_LENGTH}}$`)

export const formSchema = z.object({
  name: z.string({
      message: "Please enter your name",
    }).min(MIN_NAME_LENGTH, {
      message: `Please enter at least ${MIN_NAME_LENGTH} letters`,
    }),
  phone: z.string({
      message: "Please enter your phone number",
    }).regex(phoneRegex, {
      message: "Please enter a valid phone number",
    }),
  password: z.string({
      message: "Please enter your password",
    }).min(MIN_PASSWORD_LENGTH, {
      message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
    }),
}).required()

export type FormSchema = z.infer<typeof formSchema>
