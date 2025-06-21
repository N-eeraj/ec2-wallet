import z from "zod/v4"

export const formSchema = z.object({
  name: z.string({
      error: "Please enter your name",
    }).min(2, {
      error: "Please enter at least 2 letters",
    }),
  phone: z.string({
      error: "Please enter your phone number",
    }).regex(/^\d{10,11}$/, {
      error: "Please enter a valid phone number",
    }),
  password: z.string({
      error: "Please enter your password",
    }).min(6, {
      error: "Password must be at least 6 characters",
    }),
})

export type FormSchema = z.infer<typeof formSchema>
