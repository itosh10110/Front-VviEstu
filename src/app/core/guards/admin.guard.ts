import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => { //maneja estados sobre la ruta
  const authService = inject(AuthService);
  const router = inject(Router); //el router nos permite redirigir

  if (authService.isAuthenticated() && authService.isAdmin()) {
    return true;
  }

  // Redirigir si no es admin
  router.navigate(['/']); //redirije al home si no es admin
  return false;
};