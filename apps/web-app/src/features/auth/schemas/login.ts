import { z } from "zod/v4"
import {
  formSchema as registerFormSchema,
} from "@features/auth/schemas/register"

export const formSchema = registerFormSchema
  .omit({
    name: true,
  }).extend({
    password: z.string({
      error: "Please enter your password",
    }).nonempty({
      error: "Please enter your password",
    })
  })

export type FormSchema = z.infer<typeof formSchema>
