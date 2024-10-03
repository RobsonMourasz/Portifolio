const html = document.getElementsByTagName("html")[0];
document.getElementById("btnModo").addEventListener("click", function () {
    html.classList.toggle("light")
    if(html.classList.contains("light")){
        document.getElementById("btnModo").innerHTML = '<img src="assets/img/icons/temaClaro.svg" alt="Tema Claro"></img>';
    }else{
        document.getElementById("btnModo").innerHTML = '<img src="assets/img/icons/temaEscuro.svg" alt="Tema Claro"></img>';
    }
})