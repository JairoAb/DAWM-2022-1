const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cita', {
    id_cita: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_medico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'medico',
        key: 'id_medico'
      }
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: true
    },
    enlace: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cita" },
        ]
      },
      {
        name: "id_medico",
        using: "BTREE",
        fields: [
          { name: "id_medico" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
