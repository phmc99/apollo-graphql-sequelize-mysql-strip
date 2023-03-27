const { users } = require("../models/");

class UserServices {
  static async getUsers() {
    try {
      const allUsers = await users.findAll();
      return allUsers
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserById(id) {
    try {
      const allUsers = await users.findByPk(id);
      return allUsers
    } catch (error) {
      console.log(error); 
    }
  }
}

module.exports = UserServices