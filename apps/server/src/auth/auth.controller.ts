import {
  Controller,
  HttpCode,
  Post,
  UsePipes,
  Body,
} from "@nestjs/common"
import { z } from "zod"
import { AuthService } from "./auth.service"
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe"

const registerFormSchema = z.object({
  name: z.string({
      message: "Please enter your name",
    }).min(2, {
      message: `Please enter at least ${2} letters`,
    }),
  phone: z.string({
      message: "Please enter your phone number",
    }).regex(/^\d{10,11}$/, {
      message: "Please enter a valid phone number",
    }),
  password: z.string({
      message: "Please enter your password",
    }).min(11, {
      message: `Password must be at least ${11} characters`,
    }),
}).required()

export type RegisterFormSchema = z.infer<typeof registerFormSchema>


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @UsePipes(new ZodValidationPipe(registerFormSchema))
  async register(@Body() body: RegisterFormSchema) {
    console.log(body)
    const user = await this.authService.registerUser()
    return {
      user,
      message: "Registration Successful"
    }
  }

  @Post("login")
  @HttpCode(200)
  async login() {
    const user = await this.authService.loginUser()
    return {
      user,
      message: "Login Successful"
    }
  }

  @Post("logout")
  @HttpCode(200)
  async logout() {
    await this.authService.logoutUser()
    return {
      message: "Logout Successful"
    }
  }
}
