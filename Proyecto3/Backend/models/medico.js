const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medico', {
    id_medico: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'persona',
        key: 'correo'
      }
    },
    calificacion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    titulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'titulo_medico',
        key: 'id_titulo'
      }
    }
  }, {
    sequelize,
    tableName: 'medico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_medico" },
        ]
      },
      {
        name: "correo",
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "titulo",
        using: "BTREE",
        fields: [
          { name: "titulo" },
        ]
      },
    ]
  });
};
