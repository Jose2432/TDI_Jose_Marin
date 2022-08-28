//Función que usa variables
function cadenas(){
    let a = 3;
    let b = 'a';
    let c = "Hola soy una cadena";
    document.write("Soy un numero entero: "+a+"<br> Soy un caracter: "+b+"<br> Soy una cadena: "+c);
}

//Función que usa arreglos
function arregloComponentes(){
    const componentes = ["CPU","GPU","Motherboard","RAM","Almacenamiento","Fuente de poder","Gabinete"];
    document.write(componentes);
}

//Función que usa ciclo for
function cicloFor(){
    const pares = [2,4,6,8,10,12,14];
    for (let i = 0; i < pares.length; i++) {
        document.write("-> " + pares[i] + "<br>");
    }
}

//Función que usa ciclo while
function cicloWhile(){
    let i = 0;
    while (i <= 10) {
        document.write("Numero " + i + "<br>");
        i++;
    }
    document.getElementById("demo").innerHTML = text;
}

//Función que usa la condicional if
function condIf(){
    var form1 = document.getElementById('formulario');
    if(form1.v1.value > form1.v2.value){
        alert(form1.v1.value + " es mayor que " + form1.v2.value);
        return true;
    }else if(form1.v2.value > form1.v1.value){
        alert(form1.v2.value + " es mayor que " + form1.v1.value);
        return true;
    }else{
        alert(form1.v1.value + " es igual que " + form1.v2.value);
        return true;
    }
    return true;
}

//Función que atiende y valida datos de formulario
function validarForm(){
    let form = document.getElementById('valida');
    if(form.usuario.value == ""){
        alert("Ingresa un nombre de usuario");
        return false;
    }else if(form.contra.value != form.contraConf.value){
        alert("Las contraseñas deben ser iguales");
        return false;
    }
    alert("Hola " + form.usuario.value + " :D");
    return true;
}