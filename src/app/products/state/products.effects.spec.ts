import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';

import { ProductsEffects } from './products.effects';

describe('ProductsEffects', () => {
  let actions$: Subject<any>;
  let effects: ProductsEffects;

  beforeEach(() => {
    actions$ = new Subject<any>();
    TestBed.configureTestingModule({
      providers: [ProductsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ProductsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
