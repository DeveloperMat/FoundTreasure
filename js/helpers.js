let getRandomNumber = size => {
    //Generar numero desde 0 hasta el numero que se ingrese
    //Floor quita los decimales
    return Math.floor(Math.random() * size);
}

//Obtener distancia
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x //Pocisión eje X
    let diffY = e.offsetY - target.y //Pocision eje Y
    return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

let getDistanceHint = distance => {
    if (distance < 30){
        return "Ardiendo!";
    }else if(distance < 40){
        return "Realmente caliente";
    }else if (distance < 60){
        return "Caliente";
    }else if(distance < 100){
        return "Tibio";
    }else if(distance < 180){
        return "Frio";
    }else if(distance < 300){
        return "Realmente Frio";
    }else {
        return "Congelado"
    }
}

