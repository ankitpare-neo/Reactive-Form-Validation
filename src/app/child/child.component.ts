import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import {ParentComponent} from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit{
  count = 0
  d:any
  
  @Input() dataFromParent : string  

 
  @Output() childToParent  = new EventEmitter()
  
  constructor() { }
  ngOnInit() {
  }


   ngAfterViewInit(){}
  

 getCount(){
    return this.count = this.count + 1
  }
    sendData(msg){
      this.childToParent.emit(msg)
      this.d = this.getCount()
    }
  
    
}
