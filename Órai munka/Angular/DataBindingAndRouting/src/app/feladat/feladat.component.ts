import { Component, OnInit } from '@angular/core';

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

}


