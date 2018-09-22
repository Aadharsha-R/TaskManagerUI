import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  item : Task;

  constructor(private _router : Router) 
  { 
    this.item = new Task();
  }

  ngOnInit() {
  }

  Update()
  {
    this._router.navigateByUrl('/Update');
  }

}

