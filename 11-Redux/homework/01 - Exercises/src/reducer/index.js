const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

//  const INCREMENTO = "INCREMENTO";
//  const DECREMENTO = "DECREMENTO";

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function rootReducer(state = initialState, action) {
  switch(action.type){
    case INCREMENTO: 
    return{...state, contador: state.contador + action.playload};

    case DECREMENTO: 
    return{...state, contador: state.contador - action.playload};
    default:
    return {...state};
  }
}

module.exports = rootReducer;