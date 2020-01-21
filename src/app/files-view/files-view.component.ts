import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-view',
  templateUrl: './files-view.component.html',
  styleUrls: ['./files-view.component.css']
})
export class FilesViewComponent implements OnInit {

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
