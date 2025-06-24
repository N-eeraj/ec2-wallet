import {
  Injectable,
  HttpException,
  HttpStatus,
} from "@nestjs/common"
import { RegisterUserDto } from "./dto/register-user"
import { LoginUserDto } from "./dto/login-user"

@Injectable()
export class AuthService {
  async registerUser(registerUserDto: RegisterUserDto) {
    const user = {
      id: 123,
      name: "John Doe",
      phone: "9876543210",
    }
    return {
      user,
      token: "8as9f3ddr34sdfUIas2312ds3Of34r",
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    if (loginUserDto.password !== "123123" ) {
      throw new HttpException({
          status: HttpStatus.UNAUTHORIZED,
          message: "Incorrect credentials",
        }, HttpStatus.UNAUTHORIZED
      )
    }
    const user = {
      id: 123,
      name: "John Doe",
      phone: "9876543210",
    }
    return {
      user,
      token: "8as9f3ddr34sdfUIas2312ds3Of34r",
    }
  }

  async logoutUser() {
  }
}
