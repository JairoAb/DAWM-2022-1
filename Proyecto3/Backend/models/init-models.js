var DataTypes = require("sequelize").DataTypes;
var _cita = require("./cita");
var _medico = require("./medico");
var _metodo_pago = require("./metodo_pago");
var _persona = require("./persona");
var _sequelizemeta = require("./sequelizemeta");
var _titulo_medico = require("./titulo_medico");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cita = _cita(sequelize, DataTypes);
  var medico = _medico(sequelize, DataTypes);
  var metodo_pago = _metodo_pago(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var titulo_medico = _titulo_medico(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  cita.belongsTo(medico, { as: "id_medico_medico", foreignKey: "id_medico"});
  medico.hasMany(cita, { as: "cita", foreignKey: "id_medico"});
  medico.belongsTo(persona, { as: "correo_persona", foreignKey: "correo"});
  persona.hasMany(medico, { as: "medicos", foreignKey: "correo"});
  usuario.belongsTo(persona, { as: "correo_usuario_persona", foreignKey: "correo_usuario"});
  persona.hasOne(usuario, { as: "usuario", foreignKey: "correo_usuario"});
  medico.belongsTo(titulo_medico, { as: "titulo_titulo_medico", foreignKey: "titulo"});
  titulo_medico.hasMany(medico, { as: "medicos", foreignKey: "titulo"});
  cita.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(cita, { as: "cita", foreignKey: "id_usuario"});
  metodo_pago.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(metodo_pago, { as: "metodo_pagos", foreignKey: "id_usuario"});

  return {
    cita,
    medico,
    metodo_pago,
    persona,
    sequelizemeta,
    titulo_medico,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
