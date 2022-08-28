function cadenas(){
    let a = 3;
    let b = 'a';
    let c = "Hola soy una cadena";
    document.write("Soy un numero entero: "+a+"<br> Soy un caracter: "+b+"<br> Soy una cadena: "+c);
}


function arregloCarro(){
    const componentes = ["CPU","GPU","Motherboard","RAM","Almacenamiento","Fuente de poder","Gabinete"];
    document.write(componentes);
}

function ciclo(){
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    for (let i = 0; i < cars.length; i++) {
        document.write(cars[i] + "<br>");
    }
}