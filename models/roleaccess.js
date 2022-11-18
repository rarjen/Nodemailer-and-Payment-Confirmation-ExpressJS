"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoleAccess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoleAccess.init(
    {
      user_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
      access: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "RoleAccess",
    }
  );
  return RoleAccess;
};
