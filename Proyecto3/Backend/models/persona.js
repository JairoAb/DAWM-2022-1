const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona', {
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    sexo: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'persona',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "correo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
    ]
  });
};
