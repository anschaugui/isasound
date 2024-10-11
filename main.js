function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento === null) {
        //alert ('elemento não encontrado')
        console.log('elemento não encontrado');
        
    } 

    if(elemento != null) {
        //elemento.play();
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto 
for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);  
    //'#som_{instrumento}'
    tecla.onclick = function() {
        tocaSom(idAudio);
    }   
  
        tecla.onkeydown = function (evento) {

            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
        
        }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
