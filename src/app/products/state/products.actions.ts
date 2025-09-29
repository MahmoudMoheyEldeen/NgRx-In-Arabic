import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Products } from './products.model';

export const ProductsActions = createActionGroup({
  source: 'Products/API',
  events: {
    'Load Productss': props<{ productss: Products[] }>(),
    'Add Products': props<{ products: Products }>(),
    'Upsert Products': props<{ products: Products }>(),
    'Add Productss': props<{ productss: Products[] }>(),
    'Upsert Productss': props<{ productss: Products[] }>(),
    'Update Products': props<{ products: Update<Products> }>(),
    'Update Productss': props<{ productss: Update<Products>[] }>(),
    'Delete Products': props<{ id: string }>(),
    'Delete Productss': props<{ ids: string[] }>(),
    'Clear Productss': emptyProps(),
  }
});
