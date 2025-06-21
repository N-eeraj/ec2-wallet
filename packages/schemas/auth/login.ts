import z from "zod/v4"

export const formSchema = z.object({
  phone: z.string({
      error: "Please enter your phone number",
    }).regex(/^\d{10,11}$/, {
      error: "Please enter a valid phone number",
    }),
  password: z.string({
      error: "Please enter your password",
    }).min(1, {
      error: "Please enter your password",
    }),
})

export type FormSchema = z.infer<typeof formSchema>
