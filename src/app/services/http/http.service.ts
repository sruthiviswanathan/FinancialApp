import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RequestMethods } from '../../constants/request-methods';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  async makeHttpRequest(requestUrl: string, requestMethod: RequestMethods, requestBody?: any,
    requestHeaders?: HttpHeaders) {
      let params = new HttpParams();

      requestHeaders = requestHeaders || new HttpHeaders();
      if(!requestHeaders.get('contentType')) {
        requestHeaders = requestHeaders.append('Content-Type', 'application/json');
      }
      const authToken: string = '';
      if (authToken) {
        requestHeaders = requestHeaders.append('Authorization', authToken);
      }

      const options = {
        headers: requestHeaders,
        params: params
      };

      const httpRequest: HttpRequest<any> = new HttpRequest(requestMethod,requestUrl,requestBody, options);

      try {
        const response: any = await this.http.request(httpRequest).toPromise()
        .then((response: any) => {
          return response;
        }).catch((error: any) => {
          return Promise.reject(error);
        });

        // Adding below code for response of type 
        // Success Response:  {success: true, response: string/object}
        // Error Response: {success: true, response: string/object}
        if (response.body.success) {
          return response.body.response;
        } else {
          return Promise.reject(response.body.message);
        }
      } catch (error) {
          const errorResponse = error.error || error;
          return Promise.reject(errorResponse);
      }

    }

}
