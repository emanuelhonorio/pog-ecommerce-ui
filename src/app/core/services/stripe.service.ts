import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { loadStripe, StripeError } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { CompraDTO } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  stripePromise = loadStripe(environment.stripePublishableKey);

  constructor(private http: HttpClient) {}

  createCheckoutSession(compraDTO: CompraDTO): Promise<any> {
    return this.http
      .post(environment.baseApiUrl + '/create-checkout-session', compraDTO)
      .toPromise();
  }

  async redirectToCheckout(
    sessionId: string
  ): Promise<{
    error: StripeError;
  }> {
    const stripe = await this.stripePromise;

    return stripe.redirectToCheckout({
      sessionId,
    });
  }
}
