import {
  Controller,
  Post,
} from "@nestjs/common"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  register() {
    return {
      message: "Registration Successful"
    }
  }

  @Post()
  login() {
    return {
      message: "Login Successful"
    }
  }

  @Post()
  logout() {
    return {
      message: "Logout Successful"
    }
  }
}
