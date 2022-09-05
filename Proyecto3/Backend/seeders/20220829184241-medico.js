'use strict';

let medicos = [
  {
    "id_medico": 0,
    "correo": "zina.pardo60@gmail.com",
    "calificacion": 1.4,
    "titulo": 1
  },
  {
    "id_medico": 1,
    "correo": "janicebeltran882@fundraising.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 2,
    "correo": "stephen81@gmail.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 3,
    "correo": "wynona264@gmail.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 4,
    "correo": "valorie29@lie.com",
    "calificacion": 1.4,
    "titulo": 3
  },
  {
    "id_medico": 5,
    "correo": "marie9@like.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 6,
    "correo": "fay50@gmail.com",
    "calificacion": 1.4,
    "titulo": 3
  },
  {
    "id_medico": 7,
    "correo": "martha.doll@gmail.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 8,
    "correo": "yesenia51537@gmail.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 9,
    "correo": "latanya.sauls51@demographic.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 10,
    "correo": "marilyn41718@yahoo.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 11,
    "correo": "vera5788@yahoo.com",
    "calificacion": 1.4,
    "titulo": 5
  },
  {
    "id_medico": 12,
    "correo": "margherita.dougherty@rugby.toya.hokkaido.jp",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 13,
    "correo": "thurman_west@shortly.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 14,
    "correo": "cindy.warren@yahoo.com",
    "calificacion": 1.4,
    "titulo": 4
  },
  {
    "id_medico": 15,
    "correo": "miriam-denham3@hotmail.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 16,
    "correo": "walton-dominquez6938@gmail.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 17,
    "correo": "ellan_horvath45@arbitrary.foz.br",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 18,
    "correo": "loriannschilling@pd.com",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 19,
    "correo": "kieshataber2@gb.com",
    "calificacion": 1.4,
    "titulo": 4
  },
  {
    "id_medico": 20,
    "correo": "cynthia.crowell@hotmail.com",
    "calificacion": 1.4,
    "titulo": 1
  },
  {
    "id_medico": 21,
    "correo": "eleanore1@gmail.com",
    "calificacion": 1.4,
    "titulo": 3
  },
  {
    "id_medico": 22,
    "correo": "robin_scoggins66@branch.football",
    "calificacion": 1.4,
    "titulo": 2
  },
  {
    "id_medico": 23,
    "correo": "nohemi-clanton-oakley@adjacent.com",
    "calificacion": 1.4,
    "titulo": 5
  },
  {
    "id_medico": 24,
    "correo": "hopehannah15780@gmail.com",
    "calificacion": 1.4,
    "titulo": 4
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medico', medicos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medico', null, {});  
  }
};
