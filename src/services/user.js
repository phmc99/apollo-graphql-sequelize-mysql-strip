const { users } = require("../models/");

class UserServices {
  static async getUser() {
    try {
      const allUsers = await users.findAll();
      return allUsers
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserServices