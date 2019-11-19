import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs'
import { EventEmitter } from 'events';


@Component({
  selector: 'app-observer-demo',
  templateUrl: './observer-demo.component.html',
  styleUrls: ['./observer-demo.component.css']
})
export class ObserverDemoComponent implements OnInit {

  constructor() { }
  @Input() public childName : string

  @Output() public myOutput = new EventEmitter();
 
  ngOnInit() {



  }
   
  buttonCLick(){
    this.myOutput.emit('Hello WOrld')
  }

}
