import { Injectable } from '@angular/core';
import { Constants } from '../../constants/constants';
import { HttpService } from '../http/http.service';
import { RequestMethods } from 'src/app/constants/request-methods';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  serverBaseUrl: string = Constants.serverBaseUrl;
  constructor(private httpService: HttpService) { }

  async registerService(registerData: User) {
    console.log(registerData);
    const requestUrl = this.serverBaseUrl + '/register';
    return await this.httpService.makeHttpRequest(requestUrl, RequestMethods.POST, registerData, null);
  }

  async loginService(loginData: {email: string, password: string}) {
    const requestUrl = this.serverBaseUrl + '/login';
    return await this.httpService.makeHttpRequest(requestUrl, RequestMethods.POST, loginData);
  }
}
