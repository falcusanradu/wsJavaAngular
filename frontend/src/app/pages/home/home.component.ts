import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {SESSION_USER} from '../../interfaces';
import {WebSocketService} from '../../services/websocket.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public notifications = 0;

  constructor(private webSocketService: WebSocketService, private http: HttpClient, private router: Router) {

    let stompClient = this.webSocketService.connect();

    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/notification', notifications => {

        this.notifications = JSON.parse(notifications.body).count;

      });

    });
  }

  ngOnInit() {
    // if (!sessionStorage.getItem(SESSION_USER)) {
    //   alert('you must be logged in');
    //   this.router.navigate(['login']);
    //
    // }
  }

  callWebSocket() {
    this.webSocketService.notifyTheOtherClients().subscribe((response) => this.notifications = response);
  }

}
