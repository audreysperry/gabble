'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'userId'});
    User.hasMany(models.Like, {foreignKey: 'userId'})
  }
  return User;
};
