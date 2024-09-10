import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const faetureGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token'); 
  }
  if(token){    
    return true
  }else{    
    router.navigate(['/auth/login'])
    return false;

  }
};
