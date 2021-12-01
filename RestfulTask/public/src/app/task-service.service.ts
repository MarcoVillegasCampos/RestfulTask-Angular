import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(

)
export class TaskServiceService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
  }

  getTasks(){
    return this._http.get('/task');
}
  getById(id:string){
  return this._http.get(`/task/${id}`);
}
  newTask (task:object){
    return this._http.post('task',task);
  }

  updateTask( task:any, id:string){
    return this._http.post(`/task/${id}`, task);
  }
  deleteTask( id:string){
    return this._http.delete(`/task/${id}`);

  }
}




