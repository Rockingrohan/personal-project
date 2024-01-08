// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { AuthServiceService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate { // Use CanActivate instead of CanActivateFn
//   constructor(private authService: AuthServiceService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.authService.isLoggedIn()) {
//       return true; // Allow access if logged in
//     } else {
//       this.router.navigate(['/login']); // Redirect to login
//       return of(false); // Return an Observable for consistency
//     }
//   }
// }
