function ocultar(){
    document.getElementById("masajes-reductores").style.display="none";
    document.getElementById("masajes-relajantes").style.display="none";
    document.getElementById("masajes-faciales").style.display="none";
    document.getElementById("masajes-moldeadores").style.display="none";
    document.getElementById("FlechaReductorUp").style.display="none";
    document.getElementById("FlechaRelajanteUp").style.display="none";
    document.getElementById("FlechaFacialUp").style.display="none";
    document.getElementById("FlechaMoldeadorUp").style.display="none";
}

function mostrar1(){
    document.getElementById("masajes-reductores").style.display="block";
    document.getElementById("FlechaReductor").style.display="none";
    document.getElementById("FlechaReductorUp").style.display="block";

}

function mostrar2(){
    document.getElementById("masajes-relajantes").style.display="block";
    document.getElementById("FlechaRelajante").style.display="none";
    document.getElementById("FlechaRelajanteUp").style.display="block";

}

function mostrar3(){
    document.getElementById("masajes-faciales").style.display="block";
    document.getElementById("FlechaFacial").style.display="none";
    document.getElementById("FlechaFacialUp").style.display="block";
}

function mostrar4(){
    document.getElementById("masajes-moldeadores").style.display="block";
    document.getElementById("FlechaMoldeador").style.display="none";
    document.getElementById("FlechaMoldeadorUp").style.display="block";
}


function ocultar1(){
    document.getElementById("masajes-reductores").style.display="none";
    document.getElementById("FlechaReductor").style.display="block";
    document.getElementById("FlechaReductorUp").style.display="none";
}

function ocultar2(){
    document.getElementById("masajes-relajantes").style.display="none";
    document.getElementById("FlechaRelajante").style.display="block";
    document.getElementById("FlechaRelajanteUp").style.display="none";
}

function ocultar3(){
    document.getElementById("masajes-faciales").style.display="none";
    document.getElementById("FlechaFacial").style.display="block";
    document.getElementById("FlechaFacialUp").style.display="none";
}

function ocultar4(){
    document.getElementById("masajes-moldeadores").style.display="none";
    document.getElementById("FlechaMoldeador").style.display="block";
    document.getElementById("FlechaMoldeadorUp").style.display="none";
}

var images = document.querySelectorAll('#image-container img');
var currentImageIndex = 0;

setInterval(function() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex++;
    if (currentImageIndex == images.length) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].style.opacity = '1';
}, 3000);