import {
  OmitType,
} from "@nestjs/mapped-types"
import {
  IsNotEmpty,
} from "class-validator"
import { RegisterUserDto } from "./register-user"

export class LoginUserDto extends OmitType(RegisterUserDto, ["name"] as const) {
  @IsNotEmpty({ message: "Password is required" })
  password: string
}
