const width = 500;
const heigh = 500;

let target =  {
    x: getRandomNumber(width),
    y: getRandomNumber(heigh)
}; 
let clicks = 0;
let $map = document.getElementById('map');
let $distance = document.getElementById('distance');

$map.addEventListener("click",function(e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    
    $distance.innerHTML = `<h1>${distanceHint}</h1>` 

    if(distance < 20){
        alert(`Fount the Treasuer in ${clicks} clicks!`);
        location.reload();
    }
    

});