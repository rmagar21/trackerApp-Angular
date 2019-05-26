import { Component, OnInit } from '@angular/core';
import { TrackerserviceService } from '../service/trackerservice.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
   trackerlist;

  constructor(private tracker: TrackerserviceService) { }

  ngOnInit() {
    this.tracker.getTracker().subscribe(data=>{
      console.log(data);
      this.trackerlist=data;
    });
  }

}
