import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import {Translate} from '../../translate.service';
import {SESSION_USER} from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: Translate, private router: Router, private backendService: BackendService) {
  }

  ngOnInit() {
  }

  public logout(): void {
    sessionStorage.removeItem(SESSION_USER);
    // sessionStorage.clear();
    // this.router.navigate(['/login']);
  }

  isSession(): boolean {
    if (sessionStorage.getItem(SESSION_USER ) !== null) {
      return true;
    }
    return false;
  }


}
