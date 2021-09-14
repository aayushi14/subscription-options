import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SubscriptionOption } from './subscription.model';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private subscriptionOptionsUrl = 'api/subscriptionOptions/';
  constructor(private httpClient: HttpClient) { }

  // get the list of subscription options from the database and return an Observable of them
  getSubscriptionOptions(): Observable<SubscriptionOption[]> {
    return this.httpClient.get<SubscriptionOption[]>(this.subscriptionOptionsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getSubscriptionOption(id: number): Observable<any> {
    return this.httpClient.get(this.subscriptionOptionsUrl + id);
  }

  createSubscriptionOption(subscriptionOption: SubscriptionOption): Observable<SubscriptionOption> {
    subscriptionOption.id = null as any;
    return this.httpClient.post<SubscriptionOption>(this.subscriptionOptionsUrl, subscriptionOption).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  // update a particular subscriptionOption
  editSubscriptionOption(subscriptionOption: SubscriptionOption): Observable<any> {
    return this.httpClient.put(this.subscriptionOptionsUrl + subscriptionOption.id, subscriptionOption);
  }

  deleteSubscriptionOption(id: number): Observable<any> {
    return this.httpClient.delete(this.subscriptionOptionsUrl + id);
  }
}
