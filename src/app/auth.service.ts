// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {
//   private baseUrl = 'http://localhost:2000'; // Adjust the base URL if needed

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string, role: string): Observable<any> {
//     const url = `${this.baseUrl}/login/${username}/${password}/${role}`;

//     return this.http.get(url).pipe(
//       tap(data => {
//         if (data === 'Login Successful') {
//           // Store details in local storage upon successful login
//           localStorage.setItem('username', username);
//           localStorage.setItem('role', role);
//         }
//       })
//     );
//   }

//   logout(): void {
//     // Clear local storage during logout
//     localStorage.removeItem('username');
//     localStorage.removeItem('role');
//   }

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('username');
//   }

//   isAdmin(): boolean {
//     return localStorage.getItem('role') === 'Admin';
//   }

//   isEmployee(): boolean {
//     return localStorage.getItem('role') === 'Employee';
//   }

//   // Assuming this function is used for notifications
//   notification(title: string, text: string): void {
//     // ... implementation for displaying notifications
//   }
// }
