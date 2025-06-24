import {
  Controller,
  HttpCode,
  Post,
  Body,
} from "@nestjs/common"
import { AuthService } from "./auth.service"
import { RegisterUserDto } from "./dto/register-user"
import { LoginUserDto } from "./dto/login-user"


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto) {
    const data = await this.authService.registerUser(registerUserDto)
    return {
      data,
      message: "Registration Successful"
    }
  }

  @Post("login")
  @HttpCode(200)
  async login(@Body() loginUserDto: LoginUserDto) {
    const data = await this.authService.loginUser(loginUserDto)
    return {
      data,
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
