//Ejercicio 1
function cambiarTexto () {
        document.getElementById("texto1").innerHTML = "Hello Javascript World!";

}
//Ejercicio 2
function cambiarEstilo () {
    document.getElementById("texto2").style.fontSize = "40px";
}
//Ejercicio 3
function esconder () {
    
    document.getElementById("texto3").hidden = "true";
    
}

function mostrar () {
    
    document.getElementById("texto4").removeAttribute("hidden");
    
}
//Ejercicio 4
function mostrarUrl () {
    
    document.getElementById("texto5").innerHTML = document.URL;
    
}
//Ejercicio 5
function mostrarForm () {
    
    document.getElementById("textoForm").innerHTML = document.getElementsByTagName("form")[2].name;
    
}
//Ejercicio 6
function cambioColor1() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
           
    document.getElementsByTagName("label")[0].style.background = bgColor;
    
    
}

function cambioColor2() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
           
    
    
    document.getElementsByTagName("label")[1].style.background= bgColor;
}
// Ejercicio 7
function pasarMayus() {
    var x = document.getElementById("texto7").innerHTML;
    document.getElementById("texto7").innerHTML =  x.toUpperCase();
    
}
//Ejercicio 8
function contarAnchor() {
    document.getElementById("texto8").innerHTML =  document.getElementsByTagName("a").length;
        
}