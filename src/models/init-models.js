var DataTypes = require("sequelize").DataTypes;
var _courses = require("./courses");
var _subscriptions = require("./subscriptions");
var _users = require("./users");

function initModels(sequelize) {
  var courses = _courses(sequelize, DataTypes);
  var subscriptions = _subscriptions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  subscriptions.belongsTo(courses, { as: "couse", foreignKey: "couseId"});
  courses.hasMany(subscriptions, { as: "subscriptions", foreignKey: "couseId"});
  subscriptions.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(subscriptions, { as: "subscriptions", foreignKey: "userId"});

  return {
    courses,
    subscriptions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
