import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  routePrefix = 'Application'

  constructor(private http:HttpClient) { }

  updateApplicationStatus(applicationId, applicationStatusId) {
    return this.http.patch(environment.baseUrl + this.routePrefix + '/ApplicantSelectAll', applicationId, applicationStatusId);
  }
}
