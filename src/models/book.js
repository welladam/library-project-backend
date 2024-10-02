'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};