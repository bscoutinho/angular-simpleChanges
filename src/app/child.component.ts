import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <a (click)="changeFromChild()">Change from child</a>
    <br/>
    {{parentData}}
  `	
})
export class ChildComponent implements OnInit {
  @Input() parentData: any;
  constructor() {
  }

  ngOnInit() {
  }

  changeFromChild(){
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}