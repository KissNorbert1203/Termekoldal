let obj = new Object();
const http = new XMLHttpRequest();
http.onload = function(){
    obj = JSON.parse(this.responseText);
    document.getElementById("kep").src = obj.image;
    document.getElementById("kep2").src = obj.image;
    document.getElementById("kep3").src = obj.image;
    document.getElementById("kep4").src = obj.image;
    document.getElementById("kep5").src = obj.image;
    document.getElementById("nev").innerHTML = obj.name
    document.getElementById("leiras").innerHTML = obj.description
    document.getElementById("ertekeles").innerHTML = obj.rating
    document.getElementById("ar").innerHTML = obj.price + " " + obj.currency
    document.getElementById("raktar").innerHTML = "Raktáron (" + obj.stock + " db)"


}
http.open("GET", "termek.json");
http.send();