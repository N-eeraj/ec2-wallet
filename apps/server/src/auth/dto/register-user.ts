import {
  Length,
  MinLength,
} from "class-validator"

export const MIN_NAME_LENGTH = 2
export const MIN_PASSWORD_LENGTH = 6

export const MIN_PHONE_LENGTH = 10
export const MAX_PHONE_LENGTH = 11

export class RegisterUserDto {
  @MinLength(MIN_NAME_LENGTH, {
    message: `Please enter at least ${MIN_NAME_LENGTH} letters`,
  })
  name: string

  @Length(10, 11, {
    message: "Please enter a valid phone number",
  })
  phone: string

  @MinLength(6, {
    message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
  })
  password: string
}
