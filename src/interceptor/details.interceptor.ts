import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetailView } from 'src/view/entities/view.entity';

@Injectable()
export class DetailsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return data.map((userData: UserDetailView) => {
          let isActives: string = '';
          if (userData.isActive === 1) {
            isActives = 'false';
          } else if (userData.isActive === 0) {
            isActives = 'true';
          }
          const res = {
            ...userData,
            isActives
          };
          delete res.isActive;
          return res;
        });
      })
    );
  }
}
