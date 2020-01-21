import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunions-view',
  templateUrl: './reunions-view.component.html',
  styleUrls: ['./reunions-view.component.css']
})
export class ReunionsViewComponent implements OnInit {

  //ici on met les variables globales:
  isAuth='false';

  //ceci est un pipe:
  LastUpdate = new Date();

  //Definition des diffrentes fonctions:
  onADD(){
    console.log(' Addition is Done!');
  };
  onEDIT(){
    console.log('Edit is Done!');
  };
  onSAVE(){
    console.log('Save is Done!');
  }
  onDELETE(){
    console.log(' Delete is Done!');

  };

  constructor() { }

  ngOnInit() {
  }



}
