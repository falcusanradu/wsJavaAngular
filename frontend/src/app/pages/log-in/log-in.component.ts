import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Translate} from '../../translate.service';
import {SESSION_USER, User} from '../../interfaces';
import {BackendService} from '../../services/backend.service';

enum errorMsgEnum {
  OCNFIRMATION_INCORRECT = 'confirmation password incorrect!',
  // REGISTER_SUCCESS = 'register succes',
  USERNAME_EXISTS = 'username exists',
  EMAIL_EXISTS = 'email exists',
  INVALID_USERNAME_OR_PASSWORD = 'Invalid username or password',
  LOGIN_FAILED = 'login failed',
  USERNAME_OR_PASSWORD_CANNOT_BE_NULL = 'username or password can\'t be null',
};

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  // login
  loginUsername: string;
  LoginPassword: string;
  // register

  errorMessageLogin: string;


  constructor(private router: Router, private backendService: BackendService, private translateService: Translate) {
  }

  ngOnInit() {
  }


  login() {
    this.errorMessageLogin = null;
    let user = {
      'username': this.loginUsername,
      'password': this.LoginPassword
    };
    this.backendService.post('/user/login', user).subscribe(response => {
      this.loginSuccess(response);
    });
  }

  loginSuccess(data: User) {
    console.log('I\'m in loginSuccess()');
    if (data != null) {
      this.backendService.loggedUsername = this.loginUsername;
      sessionStorage.setItem(SESSION_USER, JSON.stringify(data));

      console.log('login succes!!!!!');
      this.router.navigate(['/home']);
    } else {
      console.log('failed!!!!!');
      this.errorMessageLogin = errorMsgEnum.INVALID_USERNAME_OR_PASSWORD;
    }
  }

  loginError() {
    this.errorMessageLogin = errorMsgEnum.LOGIN_FAILED;
  }


}
