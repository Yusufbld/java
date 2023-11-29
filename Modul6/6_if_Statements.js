//if statements

var age = 20;

if(age >= 18) {
    // wenn bedingung wahr wird 
        console.log("Eintritt gewährt")
} else {
    // wird in jedem anderen fall ausgeführt
    console.log("nicht alt genug")
}


var color = prompt("trage eine Ampel-Farbe ein:");
var lowerColorName = color.toLowerCase();

// Wenn Grün-> fahren
if(lowerColorName == "grün"){
    alert("du darfst fahren");
} else if(lowerColorName == "orange"){
    alert("du darfst anfahren oder musst bremsen");
} else if(lowerColorName =="rot"){
    alert("du musst halten");
}

// wenn orange-> amfahrem/bremsen

// wenn rot ->halten

// Fehlermeldung zurückgeben bei falscher farbe


