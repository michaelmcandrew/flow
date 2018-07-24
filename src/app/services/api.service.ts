import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Contact } from '../entities/contact/contact.model';

@Injectable()
export class ApiService {

  params: HttpParams

  constructor(private http: HttpClient) {
    this.params = new HttpParams()
    .set('json', '1')
    .set('key', environment.siteKey)
    .set('api_key', environment.apiKey)
  }

  getsingle(entity: string, id: number) : Observable<Contact>{
    let params = this.params
    .set('entity', entity)
    .set('action', 'getsingle')
    .set('id', id.toString())
    return this.http.get<Contact>(
      environment.restApiBaseUrl,
      {params: params}
    );
  }
}
