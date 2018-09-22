import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  item:Task;

  constructor( ) 
  { 
    this.item = new Task();
  }

  ngOnInit() {
  }

  Add()
  {
    //Call service method
  }

}

