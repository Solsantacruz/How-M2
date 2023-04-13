//URL del servidor donde estan los datos
const URL = 'http://localhost:5000/amigos/';

//trae el id ul 
const listaDeAmigos = document.querySelector('#lista');

//Crea la lista de amigos 'li' que es agregada al 'ul'
const creaLista = (usuario) => {
const lista = document.createElement('li');
lista.className = 'li';
lista.innerHTML = usuario.name;
listaDeAmigos.appendChild(lista);
}

//$('#boton').click(creaLista);

// Recorre la lista de amigos extraida del servidor
const traeAmigos = (usuarios) => {
    usuarios.forEach(creaLista);
}

$.get(URL, (traeAmigos));

//TODO LO DEL BOTON AMIGOS // trae el id del boton para agregar la lista en el 
const verAmigos = document.getElementById('boton');
 verAmigos.addEventListener('click', () => {
    lista.classList.toggle('show');
    if(listaDeAmigos.classList.contains('show')){
        verAmigos.innerHTML = 'Ocultar Amigos';
    }else {
        verAmigos.innerHTML = 'Ver Amigos';
    }
 })


 // BOTON BUSCADOR DE AMIGOS 
  const btnSearch = document.getElementById('search');
  
  btnSearch.addEventListener('click', ()=>{
    const id = $('#input')[0].value;
    $.get(`${URL}${id}`, (respuesta)=>{  
        $('#amigo').html(respuesta.name);
    })
  });


  // BOTON BORRAR AMIGOS

  $('#boton').click('click', ()=> {
    const nBorrar = $('#inputDelete')[0].value;
    $.ajax({
        url: `${URL}${nBorrar}`,
        type: 'DELETE',
        success: function() {
            $('#success').html(`${nBorrar} fue borrado con exito`);
            $('#inputSuccess').val('');
            
        }
        
    });
})


