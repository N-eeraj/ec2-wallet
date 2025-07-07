import type {
  FormEvent,
} from "react"
import {
  MAX_PHONE_LENGTH,
} from "@features/auth/constants"

interface Options {
  maxLength?: number,
  formatter?: (_string: string) => void
}

export function numericInput(event: FormEvent<HTMLInputElement>, { maxLength, formatter }: Options = {}) {
  const targetElement = event.target as HTMLInputElement
  const value = targetElement.value
    .replace(/\D/g, "")
    .slice(0, maxLength ?? Infinity)
  targetElement.value = formatter?.(value) ?? value
}

export const currencyInput = (event: FormEvent<HTMLInputElement>) => numericInput(event, {
  formatter: Number,
})

export const onPhoneInput = (event: FormEvent<HTMLInputElement>) => numericInput(event, {
  maxLength: MAX_PHONE_LENGTH,
})
