import { Component, Input } from '@angular/core';
import { TimelineItem } from './timeline-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ngx-vertical-timeline',
  templateUrl: './ngx-vertical-timeline.component.html',
  styleUrls: ['./ngx-vertical-timeline.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NgxVerticalTimelineComponent {

  list: TimelineItem[] = [];
  constructor() { }

  @Input()
  set items(list: TimelineItem[]) {
    this.list = list;
  }

  action(item: TimelineItem) {
    if (item.command) {
      item.command();
    }
  }

}
