const { subscriptions } = require("../models/");
const stripe = require('stripe')('sk_test_51Mq8zNLveZ5gxXWLBaLLmaajeSU9UzkCulja4rx4YWMCraSLXkFcp0r0u8PsNbIo7jzObUQgPQaIx1T2f9Eqo2iZ00Uy82wMqk');

class SubscriptionServices {
  static async getSubscription() {
    try {
      const allSubscriptions = await subscriptions.findAll();
      return allSubscriptions
    } catch (error) {
      console.log(error);
    }
  }

  static async createSession(priceId, context) {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `http://localhost:5000?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5000?canceled=true`,
    });

    return session.url
  }
}

module.exports = SubscriptionServices

