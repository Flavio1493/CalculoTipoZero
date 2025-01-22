function calcularHarina(){
    let cantBolitasTexto = document.getElementById("cantidadBolitas").value;
    let cantHarinaAUsarExactamente = document.getElementById("cantidadDeHarinaExacta");

    let cantHarina = (cantBolitasTexto*1000)/18;

    cantHarinaAUsarExactamente.textContent = cantHarina.toFixed(2) + " gr";
}

function calcularIngredientes(){
    let cantHarinaAUsar = document.getElementById("cantHarinaAUsar").value;

    let elementoCantAgua = document.getElementById("cantidadAgua");
    let elementoCantLevadura = document.getElementById("cantidadLevadura");
    let elementoCantAceite = document.getElementById("cantidadAceite");
    let elementoCantSal = document.getElementById("cantidadSal");

    elementoCantAgua.textContent = calcularAgua(cantHarinaAUsar).toFixed(2) + " gr";
    elementoCantLevadura.textContent = calularLevadura(cantHarinaAUsar).toFixed(2) + " gr";
    elementoCantAceite.textContent = calcularAceite(cantHarinaAUsar).toFixed(2) + " gr";
    elementoCantSal.textContent = calcularSal(cantHarinaAUsar).toFixed(2) + " gr";
}

function calcularAgua(cantHarina){
    let result = cantHarina*0.74;

    return result;
}

function calularLevadura(cantHarina){
    let result = cantHarina*0.00225;

    return result;
}

function calcularAceite(cantHarina){
    let result = cantHarina*0.03;

    return result;
}

function calcularSal(cantHarina){
    let result = cantHarina*0.027;

    return result;
}