let obj = new Object();
const http = new XMLHttpRequest();
http.onload = function(){
    if (this.status !== 200) {
        alert("A termékadatok nem érhetők el.");
        return;
    }
    obj = JSON.parse(this.responseText);
    document.getElementById("kep").src = obj.image;
    document.getElementById("kep2").src = obj.image;
    document.getElementById("kep3").src = obj.image;
    document.getElementById("kep4").src = obj.image;
    document.getElementById("kep5").src = obj.image;
    document.getElementById("nev").innerHTML = obj.name
    document.getElementById("leiras").innerHTML = obj.description
    document.getElementById("ertekeles").innerHTML = obj.rating + " (127 értékelés)"
    document.getElementById("ar").innerHTML = obj.price.toLocaleString("hu-HU") + " " + obj.currency
    document.getElementById("raktar").innerHTML = "Raktáron (" + obj.stock + " db)"
    document.getElementById("kosar").innerHTML = "Kosárba"
    document.getElementById("gyarto").innerHTML = obj.manufacturer.name
    document.getElementById("orszag").innerHTML = obj.manufacturer.country
    document.getElementById("garancia").innerHTML = "2 év"
    document.getElementById("szallitas").innerHTML = "1-3 munkanap"
    document.getElementById("jellemzo1").innerHTML = obj.features[0]
    document.getElementById("jellemzo2").innerHTML = obj.features[1]
    document.getElementById("jellemzo3").innerHTML = obj.features[2]
    document.getElementById("jellemzo4").innerHTML = "NVIDIA " + obj.features[3]
    document.getElementById("velemenyNev1").innerHTML = obj.reviews[0].user
    document.getElementById("velemenySzoveg1").innerHTML = obj.reviews[0].comment
    document.getElementById("velemenyNev2").innerHTML = obj.reviews[1].user
    document.getElementById("velemenySzoveg2").innerHTML = obj.reviews[1].comment

}
http.onerror = function(){
    alert("A termékadatok nem érhetők el.");
}
http.open("GET", "termek.json");
http.send();