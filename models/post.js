const {Class, User, Question} = require('../models')
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        userId : {
            type : DataType.INTEGER,
            reference : {
                model : User,
                key : 'id',
            }
        },
        classId : {
            type : DataType.INTEGER,
            reference : {
                model : Class,
                key : 'id',
            }
        },
        questionId : {
            type : DataType.INTEGER,
            reference : {
                model : Question,
                key : 'id',
            }
        },
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