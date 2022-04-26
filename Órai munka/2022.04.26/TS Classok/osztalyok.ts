

class Auto {
    marka: string;
}

const ujAuto = new Auto();//Osztály példányosítása ujAuto néven
ujAuto.marka = "Tesla";//Példányosított osztály márka tulajdonságának beállítása "Tesla" értékre

class Szemely {
    //Mező
    public nev: string;
    //Konstruktor egy paraméterrel
    public constructor(nevErtek: string) {
        this.nev = nevErtek;
    }

    //Metódus
    public dolgozik() {
        console.log(this.nev + " munkába megy...");
    }
}

const ujEmber = new Szemely("Józsi");
console.log(ujEmber.nev);
ujEmber.dolgozik();

class Dolgozo extends Szemely {

    //Korábban létrehozott metódust fölülírtuk
    public dolgozik() {
        console.log(this.nev + " frontendes munkahelyre megy...");
    }
}

const ujDolgozo = new Dolgozo("Lajos");
console.log(ujDolgozo.nev);
ujDolgozo.dolgozik();