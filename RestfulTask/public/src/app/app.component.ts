import { Component } from '@angular/core';
import { TaskServiceService} from './task-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  constructor (private _httpService: TaskServiceService) {}
}
