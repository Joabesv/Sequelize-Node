'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      people.hasMany(models.Classes, {
        foreignKey: 'teacher_id',
      });
      people.hasMany(models.Registration, {
        foreignKey: 'student_id',
      });
    }
  }
  people.init(
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'people',
    }
  );
  return people;
};
