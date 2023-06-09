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

const CourseMutation = {
  createCourse: async (_, body) => await CourseServices.createCourse(body)
}

const  SubscriptionsQuery = {
  getSubscriptions: async () => await SubscriptionServices.getSubscription()
}

const SubscribeMutation = {
  createSession: async (_, {priceId}, context) => await SubscriptionServices.createSession(priceId, context)
}



const Query = {...UserQuery, ...CourseQuery, ...SubscriptionsQuery}
const Mutation = {...CourseMutation, ...SubscribeMutation }

module.exports = { Query, Mutation }