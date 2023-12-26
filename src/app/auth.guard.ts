// import { Injectable } from '@angular/core';
// import {
//   CanActivateFn,
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
// export class AuthGuard implements CanActivateFn {
//   constructor(private authService: AuthServiceService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.authService.isLoggedIn()) {
//       return true; 
//     } else {
//       this.router.navigate(['/login']); 
//       return of(false);
//     }
//   }
// }
