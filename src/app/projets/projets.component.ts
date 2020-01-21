import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from './../services/projets.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {


  //ici on cree les variables utilisee dans ce component:

  @Input() ProjectName:String;
  @Input() ProjectChef:String;
  @Input() ProjectFirstDate:Date;
  @Input() ProjectLastDate:Date;
  @Input() ProjectObjectif:String;
  @Input() ProjectBudget:number;
  @Input() ProjectStatus:String ='non valide';
  isAddition: boolean = false;
  isvide: boolean = false;
  isMember: boolean = false;
  isModification : boolean = false;

  defaulttype= 'Chef of This Project';


  tables_projects =[];

  constructor(private varProjectService: ProjectService, private varRouter: Router) { 

  }
  //getters:
  getProjectName(){
    return this.ProjectName;
  }
  getProjectChef(){
    return this.ProjectChef;
  }
  getProjectBudget(){
    return this.ProjectBudget;
  }
  getProjectFirstDate(){
    return this.ProjectFirstDate;
  }
  getProjectLastDate(){
    return this.ProjectLastDate;
  }
  getProjectObjectif(){
    return this.ProjectObjectif;
  }
  getisAddition(){
    return this.isAddition;
  }
  getProjectStatus(){
    return this.ProjectStatus;
  }
  //setters:
  setProjectName(ProjectName){
    this.ProjectName=ProjectName;
  }
  setProjectBudget(ProjectBudget){
    this.ProjectBudget=ProjectBudget;
  }
  setProjectFirstDate(ProjectFirstDate){
    this.ProjectFirstDate=ProjectFirstDate;
  }
  setProjectLastDate(ProjectLastDate){
    this.ProjectLastDate=ProjectLastDate;
  }
  setProjectObjectif(ProjectObjectif){
    this.ProjectObjectif=ProjectObjectif;
  }
  setisAddition(isAddition){
    this.isAddition=isAddition;
  }
  onEDIT(){
    return this.isModification=true;

  };
  onADD(){
    console.log(' Addition is Done!');
    return this.isAddition=true;
  };
  onSAVE(form: NgForm){
    const ProjectFirstDate= form.value.ProjectFirstDate;
    const ProjectLastDate= form.value.ProjectLastDate;
    const ProjectChef= form.value.ProjectChef;
    const ProjectName= form.value.ProjectName;
    const ProjectBudget= form.value.ProjectBudget;
    const ProjectObjectif= form.value.ProjectObjectif;
    const ProjectStatus= form.value.ProjectStatus;
    return this.isAddition=false,this.isModification=false,this.isvide=true,this.varProjectService.addProject(ProjectName,ProjectChef,ProjectFirstDate,ProjectLastDate,ProjectObjectif,ProjectBudget,ProjectStatus),this.varRouter.navigate(['projets']),
    this.ProjectName=null,this.ProjectChef=null,this.ProjectFirstDate=null,this.ProjectLastDate=null,this.ProjectObjectif=null,this.ProjectBudget=null,this.ProjectStatus=null;
  }
  onValider(){
    console.log('your work is done ');
    return this.ProjectStatus='valide';
  }
  getColor(){
    if(this.ProjectStatus==='non valide'){
      return 'red';
    }
    else{
      return 'green';
    }
  }

  onDELETE(id:number){
    return this.varProjectService.deleteProject(id);

  }


  ngOnInit() {
    this.tables_projects = this.varProjectService.getProject();

  }

}
