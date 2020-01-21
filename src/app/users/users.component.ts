import { Component, OnInit, Input } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private onRouter:Router) { }

  @Input() UserFirstName:String;
  @Input() UserLastName:String;
  @Input() UserEmail:EmailValidator ;
  @Input() UserType:String ;
  @Input() UserPhone:number ;
  @Input() UserPassword1:Text ;
  @Input() UserPassword2:Text ;



  ngOnInit() {
  }

  defaulttype= 'Member';

  onSubmit(form: NgForm) {
    console.log(form.value);
    return this.onRouter.navigate(['projets']);

  }
  onCancel(){
    return this.onRouter.navigate(['auth']);
  }


}
