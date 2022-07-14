import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return `Server is running! 😎\n Please check /api for Swagger docs...`;
  }
}
