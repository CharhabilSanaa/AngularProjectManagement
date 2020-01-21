import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //ceci est un pipe:
  LastUpdate = new Date();


}
