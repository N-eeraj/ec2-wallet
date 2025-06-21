import { DEFAULT_ERROR_MESSAGE } from "@constants/messages"

export function getErrorMessage(error: unknown): string {
  let message = DEFAULT_ERROR_MESSAGE

  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "message" in error.response
  ) {
    message = String(error.response.message)
  }

  if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  }

  return message || DEFAULT_ERROR_MESSAGE
}
