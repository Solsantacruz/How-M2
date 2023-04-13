const { INCREMENTO, DECREMENTO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = (num) => {
  return {
    type: INCREMENTO,
    payload: num, // SEÑALA LO QUE SOLICITAMOS MODIFICAR
  }
};

const decremento = (num) => {
  return {
    type: DECREMENTO,
    payload: num,
  }
};

module.exports = {
  incremento,
  decremento
}