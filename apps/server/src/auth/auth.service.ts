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
      name: "John Doe",
      phone: "9876543210",
      token: "8as9f3ddr34sdfUIas2312ds3Of34r",
    }
    return user
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
      name: "John Doe",
      phone: "9876543210",
      token: "8as9f3ddr34sdfUIas2312ds3Of34r",
    }
    return user
  }

  async logoutUser() {
  }
}
