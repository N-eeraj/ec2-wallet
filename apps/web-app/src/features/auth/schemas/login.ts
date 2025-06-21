import { z } from "zod"

export const formSchema = z.object({
  phone: z.string({
      message: "Please enter your phone number",
    }).regex(/^\d{10,11}$/, {
      message: "Please enter a valid phone number",
    }),
  password: z.string({
      message: "Please enter your password",
    }).min(1, {
      message: "Please enter your password",
    }),
}).required()

export type FormSchema = z.infer<typeof formSchema>
