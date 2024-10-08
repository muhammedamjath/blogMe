import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const location = inject(Location)
  let token ;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token'); 
  }
  if(!token){
    return true
  }else{
    location.back()
    return false;
  }
};
