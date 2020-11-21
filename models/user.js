module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      //모델의 Attributes (Column)을 정의하는곳
        uuid: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        }
    }, {
      //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: false,
    });
  };