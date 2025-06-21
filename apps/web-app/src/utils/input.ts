import type {
  FormEvent,
} from "react"
import {
  MAX_PHONE_LENGTH,
} from "@features/auth/constants"

interface Options {
  maxLength?: number
}

export function numericInput(event: FormEvent<HTMLInputElement>, { maxLength }: Options = {}) {
  const targetElement = event.target as HTMLInputElement
  targetElement.value = targetElement.value
    .replace(/\D/g, "")
    .slice(0, maxLength ?? Infinity)
}

export const onPhoneInput = (event: FormEvent<HTMLInputElement>) => numericInput(event, { maxLength: MAX_PHONE_LENGTH })
