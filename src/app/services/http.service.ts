import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/model.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }
    getUserDetails(userId: string): Promise<Response> {
        return this.httpClient.get<Response>(`${environment.api_url}/user/details/${userId}`)
            .toPromise()
            .then(response => response);
    }

    
}
