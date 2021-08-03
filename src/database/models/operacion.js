'use strict';
module.exports = (sequelize, DataTypes) => {
  const Operacion = sequelize.define('Operacion', {
    tipo: DataTypes.STRING(10),
    concepto: DataTypes.STRING(45),
    fecha: DataTypes.DATE,
    monto: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });
 
	Operacion.prototype.getRoundPrice = function () {
		return Number(this.monto).toFixed();
	}
  return Operacion;
};

 