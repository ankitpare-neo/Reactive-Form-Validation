import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import {ParentComponent} from '../parent/parent.component';
import { interval, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, OnDestroy{
  count = 0
  d:any
  private unSubs : Subscription;
  isActivate : false
  @Input() dataFromParent : string; 
  
 
  @Output() childToParent  = new EventEmitter()
  
  constructor(private ser : UserServiceService) { }
  ngOnInit() {
    //  interval(1000).subscribe(data=>{
    //    console.log(data)
    //  })\

   // Service using Subject

  this.unSubs = Observable.create(observer=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count)
        // console.log(observer.next(count))
        if(count===2){
          alert('completed')
          }
        if(count>3){
          observer.error(new Error('Count value is Greater then 3'));
          }
        count++;
      },1000)
    }).pipe(map(data=>{
      return 'map ' + data
    })).subscribe((data)=>{
      console.log('Subscribe ',data)
    })
   
  }

   
   ngAfterViewInit(){}
  
 

 getCount(){
    return this.count = this.count + 1
  }
    sendData(msg){
      this.childToParent.emit(msg)
      this.d = this.getCount()
    }
  ngOnDestroy(){
    this.unSubs.unsubscribe()
  }
    


onActivate(){
  this.ser.userDetails.next(true)
}



}

