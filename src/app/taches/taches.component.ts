import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { TaskService } from './../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  //ici on cree les variables utilisee dans ce component:

  @Input() TaskName:String;
  @Input() TaskMember:String;
  @Input() TaskFirstDate:Date;
  @Input() TaskLastDate:Date;
  @Input() TaskObjectif:String;
  @Input() TaskStatus:String ='non valide';
  @Input() index:number;
  isAddition: boolean = false;
  isMember: boolean = false;
  isvide: boolean = false;
  TaskSubscription: Subscription;

  //tqqblequ vide
  tables_tasks: any;
  
  

  constructor(private varTaskService: TaskService, private varRouter: Router) { 
    
  }
  //on va creer une methode pour pouvoir acceder au elements de la liste
  //getters:
  getTaskName(){
    return this.TaskName;
  }
  getTaskFirstDate(){
    return this.TaskFirstDate;
  }
  getTaskLastDate(){
    return this.TaskLastDate;
  }
  getTaskMember(){
    return this.TaskMember;
  }
  getisAddition(){
    return this.isAddition;
  }
  getStatus(){
    return this.TaskStatus;
  }
  //setters:
  setTaskName(TaskName){
    this.TaskName=TaskName;
  }
  setisAddition(isAddition){
    this.isAddition=isAddition;
  }
  setTaskMember(TaskMember){
    this.TaskMember=TaskMember;
  }
  onEDIT(){
    console.log('Edit is Done!');
    console.log('the name of the task is:'+this.TaskName);
    console.log('the personn who have to do that is:'+this.TaskMember);

  };
  //Afficher le formulaire qui va ajouter l'utilisateur:
  onADD(){
    console.log(' Addition is Done!');
    return this.isAddition=true;
  };

  //sauvegarder les donnees et les afficher dans la liste:
  onSAVE(form: NgForm){
    const TaskMember= form.value.TaskMember;
    const TaskName= form.value.TaskName;
    const TaskObjectif= form.value.TaskObjectif;
    const TaskFirstDate= form.value.TaskFirstDate;
    const TaskLastDate= form.value.TaskLastDate;
    return this.isAddition=false,this.isvide=true,this.varTaskService.addTask(TaskMember,TaskName,TaskObjectif,TaskFirstDate,TaskLastDate),this.varRouter.navigate(['taches']),this.TaskMember=null,
    this.TaskName= null,this.TaskObjectif= null,this.TaskFirstDate= null,this.TaskLastDate= null;
    
  }
  //pour ajouter un work:
  onWork(){
    console.log('your work is done ');
    return this.TaskStatus='valide';
  }
  //faire renvoyer la couleur:
  getColor(){
    if(this.TaskStatus==='non valide'){
      return 'red';
    }
    else{
      return 'green';
    }
  }
  getindex(){
    return this.tables_tasks.TaskNames.id=this.index;

  }
  onDELETE(id:number){
    return this.varTaskService.deleteTask(id);

  }

  ngOnInit() {
    this.tables_tasks = this.varTaskService.getTask();
  }

}
