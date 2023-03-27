const CourseServices = require("../services/course");
const SubscriptionServices = require("../services/subscription");
const UserServices = require("../services/user");

const  UserQuery = {
  getUsers: async () => await UserServices.getUser()
}

const  CourseQuery = {
  getCourses: async () => await CourseServices.getCourse()
}

const  SubscriptionsQuery = {
  getSubscriptions: async () => await SubscriptionServices.getSubscription()
}


const Query = {...UserQuery, ...CourseQuery, ...SubscriptionsQuery}

module.exports = { Query }