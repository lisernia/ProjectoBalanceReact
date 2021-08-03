const express = require('express');
const router = express.Router();

const { Operacion } = require('../database/models');

router.get('/', (req, res) => {
	Operacion.findAll({
		
	})
		.then(operaciones => {
			res.json(operaciones);
		});
});

router.post('/', (req, res) => {
	Operacion.create(req.body)
		.then(dbRes => {
			res.status(200).json({
				status: 200,
				message: 'se creo el registro',
			});
		})
	
});
 
// Eliminar - DELETE - destroy
router.delete('/:id',  (req, res) => {
  
	Operacion
		.findByPk(req.params.id, {
			//include: ["categorias"]
		})

		.then(dbRes => {
			dbRes.destroy();
			res.status(200).json({
				status: 200,
				message: 'Se borro la operacion',
			});
		})
	
});

	 
	
 


module.exports = router;
