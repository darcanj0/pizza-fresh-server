import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(baseURL: string) {
    return { status: 'Server is running ✌', docs: baseURL + '/api' };
  }
}
