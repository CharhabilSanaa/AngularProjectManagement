import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAdmin= false;
  isLogOut=false;
  

  constructor(private varHomeService: HomeService,private onRouter:Router){}


  //function in order to search certain values
  OnSearch(form: NgForm) {
    console.log(form.value);
    return this.onRouter.navigate(['recherches']);
}

  //function do disapear the component home from the menu
  HomeOff(){
    this.varHomeService.OFF();

  }
  ngOnInit() {}

  
}
