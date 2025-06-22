import { Injectable } from "@nestjs/common"

@Injectable()
export class UserService {
  async getUser() {
    const user = {
      name: "John Doe",
      phone: "9876543210",
    }
    return user
  }
}
