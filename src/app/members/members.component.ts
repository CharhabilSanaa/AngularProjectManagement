import { Component,Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from './../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  //ici on cree les variables utilisee dans ce component:

  @Input() MemberPost:String;
  @Input() MemberName:String;
  isAddition: boolean = false;
  isMember: boolean = false;
  isvide: boolean = false;
  MemberSubscription: Subscription;
  defaulttype= 'Member';



  tables_members: any;


  //maintenant on va creer une table qui contient les donnees


  constructor(private varMemberService: MemberService, private varRouter: Router) { 

  }
  //getters:
  getMemberName(){
    return this.MemberName;
  }
  getMemberPost(){
    return this.MemberPost;
  }
  getisAddition(){
    return this.isAddition;
  }

  //setters:
  setMemberName(MemberName){
    this.MemberName=MemberName;
  }
  setisAddition(isAddition){
    this.isAddition=isAddition;
  }
  setMemberPost(MemberPost){
    this.MemberPost=MemberPost;
  }
  onEDIT(){
    console.log('Edit is Done!');

  };
  onADD(){
    console.log(' Addition is Done!');
    return this.isAddition=true;
  };
  onSAVE(form: NgForm){
    const MemberName = form.value.MemberName;
    const MemberPost= form.value.MemberPost;    
    return this.isAddition=false,this.isvide=true,this.varMemberService.addMember(MemberName,MemberPost),this.varRouter.navigate(['membres']),this.MemberName=null,this.MemberPost=null;
  }
  onWork(){
    console.log('your work is done ');
  }
  onDELETE(id:number){
    return this.varMemberService.deleteMember(id);

  }
  ngOnInit() {
    this.tables_members = this.varMemberService.getMember();

  }

}
