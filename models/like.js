'use strict';
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define('Like', {
    liked: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id'
      }
    }
  });


  Like.associate = function(models) {
    Like.belongsTo(models.User, {foreignKey: 'userId'});
    Like.belongsTo(models.Post, {foreignKey: 'postId'});
  };
  return Like;
};
