// if statements

function ifStatementsBlitzer(){
    

    var inputMaxSpeed = document.getElementById("maxSpeed");
    var inputSpeed = document.getElementById("speed");
    var inputDir = document.getElementById("dir");
    
    var maxSpeed = inputMaxSpeed.value;
    var speed = inputSpeed.value;
    var isFacing = inputDir.checked;

var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10);
console.log(maxSpeedWithOffset);

if(speed > maxSpeed && isFacing == true);{
        alert("du wurdest geblitzt");
    }



}