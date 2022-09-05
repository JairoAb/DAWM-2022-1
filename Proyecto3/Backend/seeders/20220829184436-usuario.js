'use strict';

let usuarios = [
  {
    "id_usuario": 0,
    "correo_usuario": "zina.pardo60@gmail.com",
    "cedula": "8735172735",
    "ciudad": "Summerset",
    "direccion": "646 Rockaway Parkway, 6659"
  },
  {
    "id_usuario": 1,
    "correo_usuario": "janicebeltran882@fundraising.com",
    "cedula": "8404892348",
    "ciudad": "Grimsley",
    "direccion": "280 Strickland Avenue, 4412"
  },
  {
    "id_usuario": 2,
    "correo_usuario": "stephen81@gmail.com",
    "cedula": "8095943820",
    "ciudad": "Gasquet",
    "direccion": "813 Everett Avenue, 9272"
  },
  {
    "id_usuario": 3,
    "correo_usuario": "wynona264@gmail.com",
    "cedula": "8044082064",
    "ciudad": "Kapowsin",
    "direccion": "799 Applegate Court, 8856"
  },
  {
    "id_usuario": 4,
    "correo_usuario": "valorie29@lie.com",
    "cedula": "8654403420",
    "ciudad": "Lutsen",
    "direccion": "738 Roosevelt Place, 4724"
  },
  {
    "id_usuario": 5,
    "correo_usuario": "marie9@like.com",
    "cedula": "8195462984",
    "ciudad": "Stagecoach",
    "direccion": "972 Royce Street, 3213"
  },
  {
    "id_usuario": 6,
    "correo_usuario": "fay50@gmail.com",
    "cedula": "8324683099",
    "ciudad": "Navarre",
    "direccion": "633 Porter Avenue, 1626"
  },
  {
    "id_usuario": 7,
    "correo_usuario": "martha.doll@gmail.com",
    "cedula": "8864143882",
    "ciudad": "Rockingham",
    "direccion": "209 Goodwin Place, 8277"
  },
  {
    "id_usuario": 8,
    "correo_usuario": "yesenia51537@gmail.com",
    "cedula": "8834163195",
    "ciudad": "Thynedale",
    "direccion": "659 Berry Street, 7332"
  },
  {
    "id_usuario": 9,
    "correo_usuario": "latanya.sauls51@demographic.com",
    "cedula": "9524572536",
    "ciudad": "Maplewood",
    "direccion": "276 Robert Street, 5759"
  },
  {
    "id_usuario": 10,
    "correo_usuario": "marilyn41718@yahoo.com",
    "cedula": "8075482251",
    "ciudad": "Carlos",
    "direccion": "167 Times Placez, 794"
  },
  {
    "id_usuario": 11,
    "correo_usuario": "vera5788@yahoo.com",
    "cedula": "8784592185",
    "ciudad": "Bayview",
    "direccion": "283 Eckford Street, 566"
  },
  {
    "id_usuario": 12,
    "correo_usuario": "margherita.dougherty@rugby.toya.hokkaido.jp",
    "cedula": "8625523671",
    "ciudad": "Thornport",
    "direccion": "750 Rose Street, 3963"
  },
  {
    "id_usuario": 13,
    "correo_usuario": "thurman_west@shortly.com",
    "cedula": "9244193656",
    "ciudad": "Elfrida",
    "direccion": "269 Harrison Avenue, 8924"
  },
  {
    "id_usuario": 14,
    "correo_usuario": "cindy.warren@yahoo.com",
    "cedula": "8725903972",
    "ciudad": "Fivepointville",
    "direccion": "687 Bayard Street, 5573"
  },
  {
    "id_usuario": 15,
    "correo_usuario": "miriam-denham3@hotmail.com",
    "cedula": "9235412095",
    "ciudad": "Worcester",
    "direccion": "602 Harrison Place, 9970"
  },
  {
    "id_usuario": 16,
    "correo_usuario": "walton-dominquez6938@gmail.com",
    "cedula": "9164302281",
    "ciudad": "Dorneyville",
    "direccion": "869 Garland Court, 5930"
  },
  {
    "id_usuario": 17,
    "correo_usuario": "ellan_horvath45@arbitrary.foz.br",
    "cedula": "8465752194",
    "ciudad": "Stockwell",
    "direccion": "242 Broadway , 7764"
  },
  {
    "id_usuario": 18,
    "correo_usuario": "loriannschilling@pd.com",
    "cedula": "8404232526",
    "ciudad": "Cazadero",
    "direccion": "365 Montgomery Place, 3119"
  },
  {
    "id_usuario": 19,
    "correo_usuario": "kieshataber2@gb.com",
    "cedula": "8834223742",
    "ciudad": "Ruffin",
    "direccion": "938 Newkirk Placez, 2603"
  },
  {
    "id_usuario": 20,
    "correo_usuario": "cynthia.crowell@hotmail.com",
    "cedula": "9935493662",
    "ciudad": "Brambleton",
    "direccion": "444 Bragg Court, 6573"
  },
  {
    "id_usuario": 21,
    "correo_usuario": "eleanore1@gmail.com",
    "cedula": "8365093297",
    "ciudad": "Unionville",
    "direccion": "709 Congress Street, 1102"
  },
  {
    "id_usuario": 22,
    "correo_usuario": "robin_scoggins66@branch.football",
    "cedula": "8634742964",
    "ciudad": "Inkerman",
    "direccion": "541 Sharon Street, 2912"
  },
  {
    "id_usuario": 23,
    "correo_usuario": "nohemi-clanton-oakley@adjacent.com",
    "cedula": "8545053211",
    "ciudad": "Goldfield",
    "direccion": "717 Lefferts Place, 5092"
  },
  {
    "id_usuario": 24,
    "correo_usuario": "hopehannah15780@gmail.com",
    "cedula": "8254013387",
    "ciudad": "Savage",
    "direccion": "981 Graham Avenue, 3696"
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario', usuarios, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuario', null, {});
  }
};
