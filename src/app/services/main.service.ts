import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  // apiURL = 'https://dummyjson.com/'
  // apiURL = 'http://localhost:3000/api/users/'
  loading = signal(false);
  apiKey = 'YOUR_GOOGLE_API_KEY';

  constructor(private http: HttpClient) { }
  show() {
    this.loading.set(true);
  }

  hide() {
    this.loading.set(false);
  }
  async login(data: any): Promise<any> {
    return await firstValueFrom(
      this.http.post('https://dummyjson.com/auth/login', data)
    );
  }

}
