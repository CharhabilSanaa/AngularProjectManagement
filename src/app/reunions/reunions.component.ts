import { Component,Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from './../services/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reunions',
  templateUrl: './reunions.component.html',
  styleUrls: ['./reunions.component.css']
})
export class ReunionsComponent implements OnInit {

  //ici on cree les variables utilisee dans ce component:

  @Input() EventName:String;
  @Input() EventObjectif:String;
  @Input() EventTime:String;
  @Input() EventPlace:String;
  @Input() EventDate:String;
  @Input() Details:String;
  @Input() EventStatus:String ='non valide';
  isAddition: boolean = false;
  isvide: boolean = false;


  tables_events =[];


  constructor(private vareventService: EventService, private varRouter: Router) { 

  }
  //getters:
  getEventName(){
    return this.EventName;
  }
  getEventDate(){
    return this.EventDate;
  }
  getDetails(){
    return this.Details;
  }
  getEventObjectif(){
    return this.EventObjectif;
  }
  getEventPlace(){
    return this.EventPlace;
  }
  getEventTime(){
    return this.EventTime;
  }
  getEventStatus(){
    return this.EventStatus;
  }
  getisAddition(){
    return this.isAddition;
  }
  //setters:
  setisAddition(isAddition){
    this.isAddition=isAddition;
  }

  setEventName(EventName){
    this.EventName=EventName;
  }
  setEventDate(EventDate){
    this.EventDate=EventDate;
  }
  setEventObjectif(EventObjectif){
    this.EventObjectif=EventObjectif;
  }
  setEventTime(EventTime){
    this.EventTime=EventTime;
  }
  setDetaisl(Details){
    this.Details=Details;
  }
  setEventPlace(EventPlace){
    this.EventPlace=EventPlace;
  }
  onEDIT(){
    console.log('Edit is Done!');
  };
  onreset(){
    this.EventName= null;
    this.EventObjectif= null;
    this.EventTime= null;
    this.EventPlace= null;
    this.EventDate= null;
    this.Details= null;
    this.EventStatus= null;;
  };
  onSAVE(form:NgForm){
    const EventName= form.value.EventName;
    const EventObjectif= form.value.EventObjectif;
    const EventTime= form.value.EventTime;
    const EventPlace= form.value.EventPlace;
    const EventDate= form.value.EventDate;
    const Details= form.value.Details;
    const EventStatus= form.value.EventStatus;
    return this.isAddition=false,this.isvide=true,this.vareventService.addEvent(EventName,EventObjectif,EventTime,EventPlace,EventDate,Details,EventStatus),this.varRouter.navigate(['reunions']),this.onreset();
  }

  onADD(){
    console.log(' Addition is Done!');
    return this.isAddition=true;
  };
  onWork(){
    console.log('your work is done ');
    return this.EventStatus='valide';
  }
  getColor(){
    if(this.EventStatus==='non valide'){
      return 'red';
    }
    else{
      return 'green';
    }
  }

  onDELETE(id:number){
    return this.vareventService.deleteevent(id);

  }
  getEvent(){
    return this.tables_events;
  }


  ngOnInit() {
    this.tables_events = this.vareventService.getEvent();

  }


}
