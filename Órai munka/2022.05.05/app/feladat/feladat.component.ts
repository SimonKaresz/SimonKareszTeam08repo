import { Component, OnInit } from '@angular/core';
import { Dolgozo } from '../minta/minta.component';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  utvonal: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  cim: string = 'angular';
  meret: string = '200';

  react(): void {
    this.utvonal = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';
    this.cim = 'react';
  }

  //téglalap kerület terület

  aOldal: number = 1;
  bOldal: number = 2;


  //Szorgalmi rész
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
  }
  ]

}


