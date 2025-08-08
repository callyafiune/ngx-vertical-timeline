# Angular Vertical Timeline (Angular 18 Version)

An Angular component for creating a responsive vertical timeline. This is an updated version for Angular 18+ using standalone components.

### Live Example
[On Stackblitz](https://stackblitz.com/edit/ngx-vertical-timeline) (link to original example)

## Installation

```bash
$ npm i ngx-vertical-timeline
```
## Usage

### Import

Since Angular 18 uses standalone components, you no longer need to import `NgxVerticalTimelineModule`. You can directly import the `NgxVerticalTimelineComponent` into your component.

```typescript
// your.component.ts
import { Component } from '@angular/core';
import { NgxVerticalTimelineComponent } from 'ngx-vertical-timeline';

@Component({
  selector: 'app-your-component',
  standalone: true,
  imports: [NgxVerticalTimelineComponent], // Import the component here
  template: `
    <lib-ngx-vertical-timeline [items]="items"></lib-ngx-vertical-timeline>
  `
})
export class YourComponent {
  // ...
}
```

### Component
```typescript
// your.component.ts
import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-vertical-timeline';

// ...
export class YourComponent implements OnInit {
  items: TimelineItem[] = [];
  externalVariable = 'hello';

  ngOnInit(): void {
    const self = this;

    this.items.push({
      label: 'Action',
      icon: 'fa fa-calendar-plus-o',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title: '18 de June, 2019, 10:12',
      command() {
        alert(`test: ${self.externalVariable}`);
      }
    });

    this.items.push({
      label: 'Action',
      icon: 'fa fa-plus',
      content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.`,
      title: '11 de November, 2019, 12:00',
      command() {
        alert('Action!');
      }
    });
  }
}
```
### Template

```html
<lib-ngx-vertical-timeline [items]="items"></lib-ngx-vertical-timeline>
```
