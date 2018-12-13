import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { SharedService } from 'src/app/services/shared.service';
import {FilterPipe} from '../../pipes/filter.pipe';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  item:Task;
  list:Task[];
  msg:any;
  Pid:number;
  // myform:FormGroup;
 
 
  constructor(private _router:Router, private _service:SharedService, private _pipe:FilterPipe) 
  { 
    this.item = new Task();
    this._service.GetAll()
    .subscribe(i=>this.list=i);
  }

  ngOnInit() {
  }

  Add()
  {
    //Call service method
    this._service.Add(this.item)
    .subscribe(i=>this.msg=i);
    console.log(this.msg);
    alert('Task Added');
    window.location.reload();
  }

  // Reset()
  // {
  //   this.myform.reset();
  // }

  // onSubmit(form:NgForm) {
  //   if (this.abc.valid) {
  //     console.log("Form Submitted!");
  //     this.myform.reset();
  //   }

}

