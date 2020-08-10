import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './../auth/services/auth.service';
import { TestBed } from '@angular/core/testing';

import { HomeInterceptor } from './home.interceptor';

describe('HomeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      HomeInterceptor,
      AuthService
      ]
  }));

  it('should be created', () => {
    const interceptor: HomeInterceptor = TestBed.inject(HomeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
