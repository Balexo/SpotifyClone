import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
mainMenu:{defaultOptions: Array<any>, accessLink: Array<any>} 
= {
  defaultOptions:[], accessLink:[]
}

customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions=[
      {
        name: "Home",
        icon: "uil-estate",
        router:["/"]
      },
      {
        name: "Buscar",
        icon: "uil-search",
        router:["/"]
      },
      {
        name: "Tu biblioteca",
        icon: "uil-chart",
        router: ["/", "favorites"]
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: "Mi lista 1",
        router: ["/"]
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

}
