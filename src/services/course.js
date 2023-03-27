const { courses } = require("../models/");

class CourseServices {
  static async getCourse() {
    try {
      const allCourses = await courses.findAll();
      return allCourses
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CourseServices