import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    constructor() { }
    parentToChild =  "Welcome to the Parent data in child"
    // childToParent = ''
    childToParent : string
    
  ngOnInit() {
  }
 
  getData(msg){
    console.log(msg)
    this.childToParent = msg
  }

}
