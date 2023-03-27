const { subscriptions } = require("../models/");

class SubscriptionServices {
  static async getSubscription() {
    try {
      const allSubscriptions = await subscriptions.findAll();
      return allSubscriptions
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SubscriptionServices