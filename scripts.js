function Telefon(marka, cena , kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor || "niebieski";
}
Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " +this.cena + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung", 3200, "biały");
SamsungGalaxyS6.printInfo();

var IPhone6S = new Telefon("Apple", 2200, "czarny");
IPhone6S.printInfo();

var OnePlusOne = new Telefon("One Plus", 1700, "srebrny");
OnePlusOne.printInfo();

var SonyEricssonK800i = new Telefon ("Sony", 300);
SonyEricssonK800i.printInfo(); 