const {Class, User, Question} = require('../models')
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        imageUrl: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        contents: {
          type: DataTypes.TEXT(),
          allowNull: false,
        }
    }, {
      //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: true,
    });
  };
 