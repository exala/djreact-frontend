import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
      if(localStorage.getItem('key') != null)
        return true;
      else{
        this.router.navigate([''])
        return false;
      }
    }
	// 	var isAuthenticated = this.authService.getAuthorizationToken();
	// 	if (isAuthenticated) {
	// 		this.router.navigate(['/search']);
	// 	}
	// 	return false;
	// }
}
