import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading-service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
 console.log('🔥 Interceptor triggered for:', req.url);

  const loadingService = inject(LoadingService); // same like constructor

  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      console.log('🔥 Interceptor triggered for:', req.url);
      loadingService.hide();
    })
  );
};