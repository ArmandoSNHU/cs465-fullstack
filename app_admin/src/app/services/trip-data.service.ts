import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { Browser_Storage } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  baseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(Browser_Storage) private storage: Storage
  ) {}

  // Call to our /login endpoint, returns JWT
  public login(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  public register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Helper method to process both login and register methods
  private handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData);
  }

  // Method to get all trips
  public getTrips(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trips`);
  }

  // Method to get a single trip by its code
  public getTrip(tripCode: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trips/${tripCode}`);
  }

  // Method to add a new trip
  public addTrip(tripData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/trips`, tripData);
  }

  // Method to update an existing trip
  public updateTrip(tripData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/trips/${tripData.code}`, tripData);
  }
}
