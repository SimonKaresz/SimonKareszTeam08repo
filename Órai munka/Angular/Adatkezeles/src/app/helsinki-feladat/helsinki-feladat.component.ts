import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helsinki-feladat',
  templateUrl: './helsinki-feladat.component.html',
  styleUrls: ['./helsinki-feladat.component.css']
})
export class HelsinkiFeladatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tablazatSzuro!: string;

  eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
  ];



  ObjektumFeltolto(feltoltendoElem: string[]): Helsinki[] {
    const adatok: Helsinki[] = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
      let daraboltSor: string[] = feltoltendoElem[i].split(" ");
      const helsinkiEredmenyek: Helsinki = new Helsinki(Number(daraboltSor[0]), Number(daraboltSor[1]), daraboltSor[2], daraboltSor[3]);
      adatok.push(helsinkiEredmenyek);
    }
    return adatok;
  }
  HelsinkiEredmenyek = this.ObjektumFeltolto(this.eredmenyek);


  //Csapat méret függvény

  CsapatMeret(minCsapatMeret: number, maxCsapatMeret: number): number[] {
    const CsapatMeretek: number[] = [];
    for (let aktCsapatMeret = minCsapatMeret; aktCsapatMeret <= maxCsapatMeret; aktCsapatMeret++) {
      CsapatMeretek.push(aktCsapatMeret)
    }
    return CsapatMeretek;
  }

  CsapatMeretOpciok = this.CsapatMeret(1, 20);


  //Szorgalmi feladat

  Sportok(vizsgaltObjektum: Helsinki[]): string[] {
    const Sportagak: string[] = [];
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
      let szerepelE: boolean = false;
      for (let j = 0; j < Sportagak.length; j++) {

        if (vizsgaltObjektum[i].sportag.includes(Sportagak[j])) {
          szerepelE = true;
        }
      }
      if (szerepelE == false) {
        Sportagak.push(vizsgaltObjektum[i].sportag)
      }
    }
    return Sportagak;
  }
  SportagakOpciok = this.Sportok(this.HelsinkiEredmenyek);

  //Szorgalmifeladat - 8.-9. lépés
  //Sportágak mellet gyűjtsd ki a sportághoz tartozó versenyszámókat is összetett adatszerkezet használata ajánlott

  SportagListazo(vizsgaltTomb: Helsinki[]): SportagAndVersenySzam[] {
    let sportagAdatok: SportagAndVersenySzam[] = [];
    let sportagIndex!: number;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
      let szerepelE: boolean = false;
      for (let j = 0; j < sportagAdatok.length; j++) {
        if (vizsgaltTomb[i].sportag == sportagAdatok[j].sportagNeve) {
          szerepelE = true;
          sportagIndex = j;
        }
      }
      if (!szerepelE) {
        sportagAdatok.push(new SportagAndVersenySzam(vizsgaltTomb[i].sportag, vizsgaltTomb[i].versenySzam));
      }
      else {
        if (!sportagAdatok[sportagIndex].versenySzamok.includes(vizsgaltTomb[i].versenySzam)) {
          sportagAdatok[sportagIndex].versenySzamok.push(vizsgaltTomb[i].versenySzam)
        }
      }
    }
    return sportagAdatok;
  }

  Sportagak = this.SportagListazo(this.HelsinkiEredmenyek);

}






export interface Eredmenyek {
  helyezes: number;
  csapatMeret: number;
  sportag: string;
  versenySzam: string;
}

export class Helsinki implements Eredmenyek {
  helyezes: number;
  csapatMeret: number;
  sportag: string;
  versenySzam: string;

  constructor(helyezes: number, csapatMeret: number, sportag: string, versenySzam: string) {
    this.helyezes = helyezes;
    this.csapatMeret = csapatMeret;
    this.sportag = sportag;
    this.versenySzam = versenySzam;
  }
}

export interface AdottSportag {
  sportagNeve: string;
  versenySzamok: string[];
}

export class SportagAndVersenySzam implements AdottSportag {
  sportagNeve: string;
  versenySzamok: string[];

  constructor(sportagNeve: string, versenySzam: string) {
    this.sportagNeve = sportagNeve;
    this.versenySzamok = [];
    this.versenySzamok.push(versenySzam);
  }
}
