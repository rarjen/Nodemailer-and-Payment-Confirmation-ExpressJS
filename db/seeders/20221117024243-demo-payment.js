"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Payments",
      [
        {
          user_id: 1,
          total: 50000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Arjen robben",
          email: "rarjen57@gmail.com",
          password: await bcrypt.hash("qwerty123", 10),
          role: "ADMIN",
          user_type: "BASIC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
    await queryInterface.bulkDelete("Payments", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
