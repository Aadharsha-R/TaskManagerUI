import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  item : Task;

  constructor(private _router : Router) 
  {
      this.item = new Task();
  }

  ngOnInit() {
  }
   
  cancel()
  {
    this._router.navigateByUrl('/View');
  }
}

