import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  moduleId: module.id,
  selector: 'user-new',
  templateUrl: 'user-new.html',
  styleUrls: ['user-new.css'],
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
})

export class UserNewComponent {
  public user: IUser;
  public form: any;

  constructor(private router: Router, public userService: UserService) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      firebaseUrl: '',
      firebaseToken: ''
    }
  }

  public onSubmit(form: any): void {
    this.userService.create(form).subscribe((data: any) => {
      this.router.navigate(['/']);
    }, (error) => {
      console.log(error);
    });
  }
}
