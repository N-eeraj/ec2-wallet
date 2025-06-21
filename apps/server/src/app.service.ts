import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  ping(): Record<string, string> {
    return {
      ping: "pong",
    }
  }
}
