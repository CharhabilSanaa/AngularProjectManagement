import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  //ici on cree les variables utilisee dans ce component:

  @Input() FileName:String;
  @Input() Description:String;
  @Input() FileStatus:String ='non valide';
  isAddition: boolean = false;

  //les variables de temps et du jour
  FileTime = new Date();
  FileDate = new Date();



  constructor() { 

  }
  //getters:
  getFileName(){
    return this.FileName;
  }
  getDescription(){
    return this.Description;
  }
  getFileStatus(){
    return this.FileStatus;
  }
  getisAddition(){
    return this.isAddition;
  }
  //setters:
  setFileName(FileName){
    this.FileName=FileName;
  }
  setDescription(Description){
    this.Description=Description;
  }
  setisAddition(isAddition){
    this.isAddition=isAddition;
  }
  onADD(){
    console.log(' Addition is Done!');
    return this.isAddition=true;
  };
  onEDIT(){
    console.log('Edit is Done!');
  };
  onWork(){
    console.log('your work is done ');
    return this.FileStatus='valide';
  }
  getColor(){
    return 'black';
  }

  ngOnInit() {
  }

}
