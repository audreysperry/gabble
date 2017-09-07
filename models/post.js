'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    post: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'userId'});
    Post.hasMany(models.Like, {foreignKey: 'postId',onDelete: 'cascade', onUpdate: 'cascade', hooks: true})
  };


  return Post;


};
