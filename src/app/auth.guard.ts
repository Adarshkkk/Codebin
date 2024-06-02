import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AutService } from './services/aut.service';

export const authGuard: CanActivateFn = () => {
  const authservice=inject(AutService )
  const router=inject(Router )

  if(authservice.isAuthenticated()){
    return true;
  }
  router.navigate(['/'])
  return false;
};
