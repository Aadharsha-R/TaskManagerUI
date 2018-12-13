import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {SharedService} from '../../services/shared.service';
import { Task } from '../../models/task';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  item : Task;
  tid:number;
  list:Task[];
  msg:String;

  constructor(private _router:Router,private _active : ActivatedRoute,private _service:SharedService,private _pipe:FilterPipe) 
  {
    
      //this.item = new Task();
      this._active.params.subscribe(k=>this.tid=k['tid'])
      this._service.Search(this.tid)
      .subscribe(i=>this.item=i);
      this._service.GetAll()
      .subscribe(i=>this.list=i);
  }

  ngOnInit() {
  }

  Update()
  {
  this._service.Edit(this.item)
  .subscribe(i=>this.msg=i);
    console.log(this.msg);
    alert('Task Changes Updated!!!');
  //this._router.navigate(['/View']);
  }
   
  cancel()
  {
    this._router.navigateByUrl('/View');
  }
}

