const CourseServices = require("../services/course");
const SubscriptionServices = require("../services/subscription");
const UserServices = require("../services/user");

const  UserQuery = {
  getUsers: async () => await UserServices.getUsers(),
  getUserById: async (root, {id}) => await UserServices.getUserById(id)
}

const  CourseQuery = {
  getCourses: async () => await CourseServices.getCourse()
}

const  SubscriptionsQuery = {
  getSubscriptions: async () => await SubscriptionServices.getSubscription()
}


const Query = {...UserQuery, ...CourseQuery, ...SubscriptionsQuery}

module.exports = { Query }