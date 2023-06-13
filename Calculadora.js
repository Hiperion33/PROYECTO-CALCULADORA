

var texto = "";

        //FUNCIONES

function escribir(valores){

texto += valores;
document.getElementById("respuesta").innerHTML = texto;

};

function CA(){
    texto = "" ;
    document.getElementById("respuesta").innerHTML = texto;
};
function igualA(){
    var respuestaTotal = eval(texto);
    document.getElementById("respuesta").innerHTML = respuestaTotal;
    if (respuestaTotal === 13){
        alert("gracias :)")};
        
        if (respuestaTotal === 5)
        {alert("por ahi mismo jsjsjsjsjs")};
    
}

        //EVENTOS DE ESCRITURA Y RESOLUCION

document.getElementById("uno").addEventListener("click", function(){escribir("1")});
document.getElementById("dos").addEventListener("click", function(){escribir("2")});
document.getElementById("tres").addEventListener("click", function(){escribir("3")});
document.getElementById("cuatro").addEventListener("click", function(){escribir("4")});
document.getElementById("cinco").addEventListener("click", function(){escribir("5")});
document.getElementById("seis").addEventListener("click", function(){escribir("6")});
document.getElementById("siete").addEventListener("click", function(){escribir("7")});
document.getElementById("ocho").addEventListener("click", function(){escribir("8")});
document.getElementById("nueve").addEventListener("click", function(){escribir("9")});
document.getElementById("cero").addEventListener("click", function(){escribir("0")});
document.getElementById("coma").addEventListener("click", function(){escribir(".")});
document.getElementById("sum").addEventListener("click", function(){escribir("+")});
document.getElementById("rest").addEventListener("click", function(){escribir("-")});
document.getElementById("multiplicacion").addEventListener("click", function(){escribir("*")});
document.getElementById("division").addEventListener("click", function(){escribir("/")});

document.getElementById("CA").addEventListener("click", function(){CA("")});

document.getElementById("igual").addEventListener("click", function(){igualA()});