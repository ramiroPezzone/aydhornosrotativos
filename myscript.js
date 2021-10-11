// Animación del menú burguer y despliegue del nav oculto
document.getElementById("menuDesplegable").onclick = function() {
    menuOpen();
}
function menuOpen() {
    document.getElementById("subMenuDesplegable").classList.toggle("open");
    document.getElementById("menuAbsolutoOculto").classList.toggle("menuAbsoluto");
}

// Detección de alto y ancho de pantalla para ajuste de logo
document.getElementById("elBody").onresize = alturaAuto();
function alturaAuto() {
        let alturaActual = window.innerHeight;
        document.getElementById("contenedorDeImagen").style.height = alturaActual+"px";
    document.getElementById("contenedorDeImagen").style.lineHeight = alturaActual+"px";
}

// Boton "Expandir/contraer información" de hornos

document.getElementById("expandirInformacion4").onclick = function() {
    expandirInfo();
}

function expandirInfo() {
    document.getElementById("tabla2").classList.toggle("expandir");
    document.getElementById("tabla3").classList.toggle("expandir");
    document.getElementById("tabla4").classList.toggle("expandir");
    document.getElementById("tabla5").classList.toggle("expandir");
    document.getElementById("tabla6").classList.toggle("expandir");
    document.getElementById("tabla7").classList.toggle("expandir");
    document.getElementById("tabla8").classList.toggle("expandir");
    document.getElementById("tabla9").classList.toggle("expandir");
    document.getElementById("tabla10").classList.toggle("expandir");
    document.getElementById("tabla11").classList.toggle("expandir");
    document.getElementById("tabla12").classList.toggle("expandir");
}

document.getElementById("expandirInformacion10").onclick = function() {
    expandirInfo2();
}

function expandirInfo2() {
    document.getElementById("tabla2-10").classList.toggle("expandir");
    document.getElementById("tabla3-10").classList.toggle("expandir");
    document.getElementById("tabla4-10").classList.toggle("expandir");
    document.getElementById("tabla5-10").classList.toggle("expandir");
    document.getElementById("tabla6-10").classList.toggle("expandir");
    document.getElementById("tabla7-10").classList.toggle("expandir");
    document.getElementById("tabla8-10").classList.toggle("expandir");
    document.getElementById("tabla9-10").classList.toggle("expandir");
    document.getElementById("tabla10-10").classList.toggle("expandir");
    document.getElementById("tabla11-10").classList.toggle("expandir");
    document.getElementById("tabla12-10").classList.toggle("expandir");
}

