function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') { 
       elemento.play();

       }

    else {
        //alert ('elemento não encontrado')
    console.log('Elemento não encontrado ou seletor inválido');

    }
 }
 

const listaDeTeclas = document.querySelectorAll('.tecla');


//while significa enquanto e for significa para
for( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

//template string
const idAudio =`#som_${instrumento}`;

//console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydow = function (evento) {

    if(evento.code === 'space' || evento.code === 'Enter');
    tecla.classList.add('ativa');

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

 }
//console.log(contador);
