const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    correo_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'persona',
        key: 'correo'
      },
      unique: "usuario_ibfk_1"
    },
    cedula: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "correo_usuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo_usuario" },
        ]
      },
    ]
  });
};
