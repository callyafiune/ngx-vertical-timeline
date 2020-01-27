## Installation

```javascript
$ npm i ngx-vertical-timeline
```
## Usage

### Import

```javascript
import { NgxVerticalTimelineModule } from 'ngx-vertical-timeline';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxVerticalTimelineModule
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Component

```javascript
...
  items: TimelineItem[] = [];
  externalVariable = 'hello';

  ngOnInit(): void {
    const self = this;

    this.items.push({
      label: 'Action',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
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
      styleClass: 'teste',
      content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.`,
      title: '11 de November, 2019, 12:00',
      command() {
        alert('Action!');
      }
    });
  }
```
### Template

```html
<lib-ngx-vertical-timeline [(items)]="items"></lib-ngx-vertical-timeline>
```
