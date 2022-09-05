'use strict';

const titulos = [
  {
    "id_titulo": 1,
    "nombre_titulo": "Cardiólogo"
  },
  {
    "id_titulo": 2,
    "nombre_titulo": "Cirujano"
  },
  {
    "id_titulo": 3,
    "nombre_titulo": "Pediatra"
  },
  {
    "id_titulo": 4,
    "nombre_titulo": "Odontólogo"
  },
  {
    "id_titulo": 5,
    "nombre_titulo": "Psiquiatra"
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Titulo_medico', titulos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Titulo_medico', null, {});  
  }
};
