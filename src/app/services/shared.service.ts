import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
url:string='http://localhost/TaskManager.API/api/Task/Get'
Posturl:string='http://localhost/TaskManager.API/api/Task/Post'
Puturl:string='http://localhost/TaskManager.API/UpdateTask'
searchurl:string='http://localhost/TaskManager.API/api/Task/Search'


  constructor(private _http:Http) { }
  GetAll():Observable<Task[]>
  {
    return this._http.get(this.url)
    .pipe(map((response:Response)=><Task[]>response.json()))
  }
  Search(Id:Number):Observable<Task>
  {
    return this._http.get(this.searchurl+"/"+Id)
    .pipe(map((response:Response)=><Task>response.json()))
  }
  Add(item:Task):Observable<any>
  {
    return this._http.post(this.Posturl,item)
    .map((response:Response)=><any>response.json);

  }
  Delete(Id:number)
  {
    return this._http.delete(this.url+"/"+Id)
    .pipe(map((response:Response)=><Task[]>response.json()))
  }
  Edit(item:Task):Observable<any>
  {
    return this._http.put(this.Puturl,item)
    .map((response:Response)=><any>response.json);
  }
}

