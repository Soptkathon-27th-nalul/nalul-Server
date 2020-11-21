module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Question', {
      //모델의 Attributes (Column)을 정의하는곳
        questionText: {
          type: DataTypes.STRING(60),
          allowNull: false,
        }
    }, {
      //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: false,
    });
  };