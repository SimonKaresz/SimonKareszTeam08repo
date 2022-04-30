
//2022.04.26
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
console.log(ujEmber.nev);//Példánynév.mezőnév
ujEmber.dolgozik();//Példánynév.metodusnév

class Dolgozo extends Szemely {

    //Korábban létrehozott metódust fölülírtuk
    public dolgozik() {
        console.log(this.nev + " frontendes munkahelyre megy...");
    }
}

const ujDolgozo = new Dolgozo("Lajos");
console.log(ujDolgozo.nev);
ujDolgozo.dolgozik();

//2022.04.28

class VedettDolgozo {
    private fizetes: number;

    public constructor(kezdoFizetes: number) {
        this.fizetes = kezdoFizetes;
    }

    //Setter és getter csak ES5-ös verziótól van

    get fizetesMezo() {
        return this.fizetes;
    }

    set fizetesMezo(value: number) {
        if (value >= 0 && value <= 2000000) {
            this.fizetes = value;
        }
        else {
            console.log("Hibás fizetés értékadás!");
        }
    }
}
let BarmiAron: VedettDolgozo = new VedettDolgozo(10000);
console.log(BarmiAron.fizetesMezo);
BarmiAron.fizetesMezo = 12000000;
console.log(BarmiAron.fizetesMezo);

abstract class SokSzogKeruletTerulet {
    public aOldal: number;
    public constructor(aOldalMeret: number) {
        this.aOldal = aOldalMeret;
    }
    public abstract kerulet(): number;
    public abstract terulet(): number;
}

class Negyzet extends SokSzogKeruletTerulet {
    public terulet(): number {
        return this.aOldal * this.aOldal;
    }
    public kerulet(): number {
        return 4 * this.aOldal;
    }
}

const negyzetAlakzat: Negyzet = new Negyzet(5);
console.log(negyzetAlakzat.kerulet());
console.log(negyzetAlakzat.terulet());
//Cannot create an instance of an abstract class!!!!!Ezt nem lehet!
//const negyzetAlakzatAbstract:SokSzogKeruletTerulet=new SokSzogKeruletTerulet();