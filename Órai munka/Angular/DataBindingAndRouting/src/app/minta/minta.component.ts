import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minta',
  templateUrl: './minta.component.html',
  styleUrls: ['./minta.component.css']
})
export class MintaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //2022.05.03
  keszito: string = "Simon Károly";
  utvonal: string = "https://angular.io/";


  uzenet(): void {
    alert("Ez egy event handleres függvény volt.");
  }

  modosito(): void {
    this.keszito = "Minta Márton";
  }

  aOldal: number = 1;


  //2022.05.05

  bevasarloLista: string[] = ["alma", "körte", "barack", "szilva", "dió", "mangó", "banán"];

  interfaceElem: Dolgozo = {
    nev: "Minta Márton",
    kor: 22,
    fizetes: 220000,
    beosztas: "Követendő példa"
  }



  interfaceTomb: Dolgozo[] = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
  },
  {
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
  },
  {
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
  },
  {
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
  },
  {
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
  },
  {
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
  },
  {
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
  }//aktuális objektum vége
  ]//tömb vége

}//class vége


export interface Dolgozo {
  nev: string;
  kor: number;
  fizetes: number;
  beosztas: string;
}