import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import {SharedService} from '../../services/shared.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {map, windowTime} from 'rxjs/operators';
import { and } from '@angular/router/src/utils/collection';
import { pipe } from 'rxjs';
import { Alert } from 'selenium-webdriver';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  item:Task;
  itemEndTask:Task;
  list:Task[];
  list1:Task[];
  list2:Task[];
  listFilter:Task[];
  
  flagTaskName:string;
  flagParentTask:string;
  flagPriorityFrom:string;
  flagPriorityTo:string;
  flagSDate:Date;
  flagEDate:Date;
  PriorityFrom:Number=0;
  PriorityTo:Number=30;

  msg:string;
  

  constructor(private _router:Router,private _service:SharedService)
  {
    this._service.GetAll()
    .subscribe(i=>this.list=this.list1=i);
  }

  ngOnInit() {
  }

  Update(tid:number)  
  {
    this._router.navigate(['/Update',{'tid':tid}]);
  }

  EndTask(tid:number)
  {
    // this._router.navigate(['/EndTask',{'tid':tid}]);
      this._service.Search(tid)
    .subscribe((i:Task)=>{
      console.log(i);
      this.itemEndTask=i;
      console.log(this.itemEndTask);
      this.itemEndTask.TaskEndFlag=true;
      console.log(this.itemEndTask);
      this.UpdateEndTaskValue();
      });
  }

  UpdateEndTaskValue()
  {
    this._service.Edit(this.itemEndTask)
    .subscribe((k)=>{
      console.log(k);
      console.log(this.itemEndTask);
      this.msg=k;
      console.log(this.msg);
      alert('Task Ended!!!.Further Edits are disabled.');
      window.location.reload();
   });
  }

  SearchbyTaskName()
  {
    console.log(this.flagTaskName);
    this.list1=this.list.filter(i=>i.TaskName.startsWith(this.flagTaskName));
  }

 SearchbyParentTask()
 {
  console.log(this.flagParentTask);
  this.list1=this.list.filter(i=>i.ParentTask!=null && i.ParentTask.startsWith(this.flagParentTask));
 }

 SearchbyPriority()
 {
  console.log(this.flagPriorityFrom);
  console.log(this.flagPriorityTo);
  if(!!this.flagPriorityFrom) this.PriorityFrom=Number(this.flagPriorityFrom);
  else this.PriorityFrom=0;
  if(!!this.flagPriorityTo) this.PriorityTo=Number(this.flagPriorityTo);
  else this.PriorityTo=30;
  this.list1=this.list.filter(i=>(i.Priority >= this.PriorityFrom && 
    i.Priority <= this.PriorityTo));
 }

 SearchbySDate()
 {
  console.log(this.flagSDate);
  this.list1=this.list.filter
  (i=>(
    (new Date(i.SDate).getDate())==(new Date(this.flagSDate).getDate())
    &&(new Date(i.SDate).getMonth())==(new Date(this.flagSDate).getMonth())
    &&(new Date(i.SDate).getFullYear())==(new Date(this.flagSDate).getFullYear())
  )
  );
 }
 SearchbyEDate()
 {
  console.log(this.flagEDate);
  this.list1=this.list.filter
  (i=>(
    (new Date(i.EDate).getDate())==(new Date(this.flagEDate).getDate())
    &&(new Date(i.EDate).getMonth())==(new Date(this.flagEDate).getMonth())
    &&(new Date(i.EDate).getFullYear())==(new Date(this.flagEDate).getFullYear())
  )
  );
 }
}

