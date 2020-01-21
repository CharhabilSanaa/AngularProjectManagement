import { Component, OnInit, Input } from '@angular/core';
import {Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { Injectable} from '@angular/core';
import { HomeService } from './../services/home.service';
import { AppComponent } from './../app.component';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLog: boolean = false;
  isWelcome: boolean = false;
  isStart: boolean = false;
  isvar: boolean = false;
  @Input() Email:EmailValidator;
  @Input() password:String;
  protected isLogOut: boolean = true;

  //getters:
  getisLog(){
    return this.isLog;
  }
  getisvar(){
    return this.isvar;
  }
  getisLogOut(){
    return this.isLogOut;
  }
  getisStart(){
    return this.isStart;
  }
  //Setters:
  setisLog(isLog){
    this.isLog=isLog;
  }
  setisvar(isvar){
    this.isvar=isvar;
  }
  setisLogOut(isLog){
    this.isLog=isLog;
  }
  setisStart(isStart){
    this.isStart=isStart;
  }
  //functions:
  onWelcome(){
    return this.isWelcome=true; //la barre de start va s'annuler
  }
  onLog(){
    console.log(' loging is Done!'); //si on clike sur la barre logIn:les autres barres doivent disparaitre
    return this.isStart=false, this.onLogOut(),this.isLog=true,this.isLogOut=false,this.varRouter.navigate(['projets']);
  };
  onLogOut(){
    console.log(' loging out is Done!');
    return this.isLogOut=false;
  }
  onVar(){
    console.log('on var is starting');

    return this.isvar=true,this.isWelcome=true;
  }
  onStart(){
    console.log(' log is starting');
    return this.isvar=false,this.isStart=true,this.onWelcome(); //si isStart is true les autres barres vont s'afficher
  }

  onLogIn(){
    console.log(' log is starting');
    return this.isvar=false,this.isStart=true,this.varRouter.navigate(['users']),this.onWelcome(); //si isStart is true les autres barres vont s'afficher
  }
  
  offLog(){
    return this.isWelcome=false,this.isLogOut=true;
  }



  constructor( private varRouter:Router,private varApp:AppComponent,private homeRouter:HomeService) { }

  ngOnInit() {
  }

}
