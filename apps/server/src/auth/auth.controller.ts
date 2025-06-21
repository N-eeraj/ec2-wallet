import {
  Controller,
  HttpCode,
  Post,
  Body,
} from "@nestjs/common"
import { AuthService } from "./auth.service"
import { RegisterUserDto } from "./dto/register-user"


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto) {
    console.log(registerUserDto)
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
