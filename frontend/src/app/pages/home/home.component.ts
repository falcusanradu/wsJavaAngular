import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {SESSION_USER} from '../../interfaces';
import {WebSocketService} from '../../services/websocket.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // the response from the server
  notifications = 0;
  notificationTimer: boolean;
  // for timer
  private timerSubscription: Subscription;
  private timer: Observable<any>;

  constructor(private webSocketService: WebSocketService, private http: HttpClient, private router: Router) {

    let stompClient = this.webSocketService.connect();

    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/notification', notifications => {

        this.notifications = JSON.parse(notifications.body).count;
        this.notificationTimer = true;
        this.setTimer(5000);

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

  // here is where the server is called
  callWebSocket() {
    this.webSocketService.notifyTheOtherClients().subscribe();
  }

  public setTimer(time) {

    this.timer = Observable.timer(time); // 5000 millisecond means 5 seconds
    this.timerSubscription = this.timer.subscribe(() => {
      this.notificationTimer = false;
    });
  }

}
