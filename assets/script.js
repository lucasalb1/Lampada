const inter = document.querySelector('#onoff');
const lamp = document.querySelector('#lamp');

function testlamp(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar (){ 
    if ( !testlamp ()) { 
    lamp.src = './img/ligada.jpg';
    }
}

function desligar (){
    if ( !testlamp ()){ 
    lamp.src = './img/desligada.jpg';
    }  
}

function quebrou(){
    lamp.src= './img/quebrada.jpg';
}

function onoff(){
    if ( !testlamp ()){ 
    if (inter.textContent == 'Ligar'){
        ligar();
        inter.textContent = 'Desligar';
    } else {
        desligar();
        inter.textContent = 'Ligar';
    }
}
}

inter.addEventListener('click', onoff);

lamp.addEventListener('mouseover', onoff);

lamp.addEventListener('mouseleave', onoff);

lamp.addEventListener('dblclick', quebrou);
