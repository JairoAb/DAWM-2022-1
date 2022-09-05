var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Persona = require('../models').persona;
const Medico = require('../models').medico;
const Usuario = require('../models').medico;
const Titulo_medico = require('../models').titulo_medico;

/* GET home page. */
router.get('/api', function (req, res, next) {
   res.render('index', { title: 'Express' });
});


router.get('/titulos', function (req, res, next) {

   Titulo_medico.findAll()
      .then(titulos => {
         let result = []
         for (var i = 0; i < 4; i++) {
            result.push(titulos[i]);
         }
         res.json(result)
      })
      .catch(error => res.status(400).send(error))
});

router.get('/titulos/:id', function (req, res, next) {

   Titulo_medico.findAll({ where: { id_titulo: req.params.id } })
      .then(titulos => {
         res.json(titulos)
      })
      .catch(error => res.status(400).send(error))
});

router.get('/medicos/count/:count', function (req, res, next) {

   Medico.findAll()
      .then(medicos => {
         if(medicos.length < req.params.count){
            res.json(medicos)
         }
         let result = []
         for (var i = 0; i < req.params.count; i++) {
            result.push(medicos[i]);
         }
         res.json(result)
      })
      .catch(error => res.status(400).send(error))
});

router.get('/medicos/:titulo', function (req, res, next) {

   Usuario.findAll({ where: { titulo: req.params.titulo } })
      .then(medicos => {
         res.json(medicos)
      })
      .catch(error => res.status(400).send(error))
});

module.exports = router;
