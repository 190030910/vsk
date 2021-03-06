import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
  template: `
  <div>
    <h1>EVENT MANAGEMENT SYSTEM</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>


  <div>
    <h1 style="color:red" >WELCOME TO ELITE EVENTS </h1>
    <h1 style="color:blue"> CAPTURE THE MOMENT....</h1>
    <img position="center"  height="250px" src="./assets/images/event-management-system-project.jpg" class="center">
  <div>
  `
})
export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventService: EventService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
}