import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskServiceService} from './task-service.service';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
