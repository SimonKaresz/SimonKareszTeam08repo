import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-eletciklus',
  templateUrl: './eletciklus.component.html',
  styleUrls: ['./eletciklus.component.css']
})
export class EletciklusComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  valtozo!: string;

  oldalUjratoltes(): void {
    window.location.reload();
  }


  constructor() {
    console.log("konstruktor lefutása");
  }
  //ngOnInit()
  ngOnInit(): void {
    console.log("ngOnInit meghívása");
  }
  //ngOnChanges()
  ngOnChanges(): void {
    console.log("ngOnChanges meghívása");
  }

  //ngDoCheck()

  ngDoCheck(): void {
    console.log("ngDoCheck meghívása");
  }


  //ngAfterContentInit()
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit meghívása");
  }

  //ngAfterContentCheck()
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked meghívása");
  }
  //ngAfterViewInit()
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit meghívása");
  }

  //ngAfterViewCheckd()
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked meghívása");
  }


  //ngOnDestroy()
  ngOnDestroy(): void {
    console.log("ngOnDestroy meghívása");
  }

  KomponensTomb = ["alma", "körte", "barack", "szilva"];
  elemTorlese(): void {
    this.KomponensTomb.splice(0, 1);
    console.log(this.KomponensTomb);
  }

}
