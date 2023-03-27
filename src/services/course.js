const { courses } = require("../models/");
const stripe = require('stripe')('sk_test_51Mq8zNLveZ5gxXWLBaLLmaajeSU9UzkCulja4rx4YWMCraSLXkFcp0r0u8PsNbIo7jzObUQgPQaIx1T2f9Eqo2iZ00Uy82wMqk');

class CourseServices {
  static async getCourse() {
    try {
      const allCourses = await courses.findAll();
      return allCourses
    } catch (error) {
      console.log(error);
    }
  }

  static async createCourse(body) {
    try {
      await courses.create(body);

      stripe.products.create({
        name:  body.name,
        description: body.description,
      }).then(product => {
        stripe.prices.create({
          unit_amount: body.price,
          currency: 'usd',
          recurring: {
            interval: 'month',
          },
          product: product.id,
        }).then(price => {
          console.log('Success! Here is your starter subscription product id: ' + product.id);
          console.log('Success! Here is your premium subscription price id: ' + price.id);
        });
      });

      return "Course created"
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CourseServices