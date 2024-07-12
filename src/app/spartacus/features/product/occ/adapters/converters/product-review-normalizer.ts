
import { Injectable } from '@angular/core';
import { Converter, Review } from '@spartacus/core';
import { CustomOcc } from '../../occ-models';

@Injectable({ providedIn: 'root' })
export class ProductCustomReviewNormalizer implements Converter<CustomOcc.Review, Review> {
  constructor() {}

  convert(source: CustomOcc.Review, target?: Review): Review {
    target = target ?? { };

    target.id = source.id.toString();
    target.date = new Date();
    target.comment = source.body;
    target.headline = source.name;
    target.rating = Math.round(Math.random() * 5);
    target.principal = {
      uid: source.email,
      name: source.email
    }
    return target as Review;
  }
}
