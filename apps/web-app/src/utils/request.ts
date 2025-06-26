import {
  DEFAULT_ERROR_MESSAGE,
} from "@constants/messages"

export function getErrorResponse(error: unknown) {
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object"
  ) return error.response

  return null
}

export function getErrorResponseData(errorResponse: object) {
  if ("data" in errorResponse && errorResponse.data) return errorResponse.data
  return null
}

export function getErrorMessage(error: unknown): string {
  let message = DEFAULT_ERROR_MESSAGE
  const errorResponse = getErrorResponse(error)

  if (errorResponse) {
    const errorData = getErrorResponseData(errorResponse)
    if (
      errorData &&
      typeof errorData === "object" &&
      "message" in errorData
    ) {
      message = String(errorData.message)
    } else if ("message" in errorResponse) {
      message = String(errorResponse.message)
    }
  }

  if (
    !message &&
    error &&
    typeof error === "object" &&
    "message" in error
  ) {
    message = String(error.message)
  }

  return message || DEFAULT_ERROR_MESSAGE
}

export function getErrorStatus(error: unknown) {
  const errorResponse = getErrorResponse(error) ?? {}
  if (
    errorResponse &&
    typeof errorResponse === "object" &&
    "status" in errorResponse
  ) {
    return Number(errorResponse.status)
  }
  return null
}

export function getFormErrors(error: unknown) {
  const errorData = getErrorResponseData(getErrorResponse(error) ?? {})
  const status = getErrorStatus(error)
  if (
    status &&
    errorData &&
    typeof errorData === "object" &&
    "errors" in errorData &&
    [400, 422].includes(status)
  ) return errorData.errors
  return null
}
