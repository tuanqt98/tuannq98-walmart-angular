import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'https://reqres.in';
  public user = null;
  private savedTokenName = 'token';

  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(`${this.baseURL}/api/login`, user).pipe(
      map(
        (res) =>
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmV0IiwiZW1haWwiOiJqYW5ldC53ZWF2ZXJAcmVxcmVzLmluIiwiaXNBZG1pbiI6dHJ1ZSwiYXZhdGFyIjoiaHR0cHM6Ly9yZXFyZXMuaW4vaW1nL2ZhY2VzLzEtaW1hZ2UuanBnIiwiaWF0IjoxNTE2MjM5MDIyLCJpZCI6Mn0.A_wje7Ez3doZQLb0uHlbN5tqTtGqURY8ilCI3fnUHCY'
      ),
      tap((token: string) => {
        let decoded = jwtDecode(token);
        this.user = decoded;
        this.user.token = token;
        localStorage.setItem(this.savedTokenName, token);
      })
    );
  }
  isLoggedIn(): boolean {
    return !!this.user;
  }
  logout() {
    this.user = null;
    localStorage.removeItem(this.savedTokenName);
  }
  isAdmin(): boolean {
    if (this.user && this.user.isAdmin) {
      return true;
    }
    return false;
  }
}
