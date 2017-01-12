function Telefon(marka, cena, kolor, gwarancja) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor || "niebieski";
};

Telefon.prototype.getWarrantyCost = function(cena) {
    return cena * 0.1;
};
Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Cena przedłużonej gwarancji to " + this.getWarrantyCost(this.cena) + ".");
};

var samsungGalaxyS6 = new Telefon("Samsung", 3200, "biały");
samsungGalaxyS6.printInfo();

var iPhone6S = new Telefon("Apple", 2200, "czarny");
iPhone6S.printInfo();

var onePlusOne = new Telefon("One Plus", 1700, "srebrny");
onePlusOne.printInfo();

var sonyEricssonK800i = new Telefon ("Sony", 300);
sonyEricssonK800i.printInfo(); 