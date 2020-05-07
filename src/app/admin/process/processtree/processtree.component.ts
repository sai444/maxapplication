import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processtree',
  templateUrl: './processtree.component.html',
  styleUrls: ['./processtree.component.scss']
})
export class ProcesstreeComponent implements OnInit {

  constructor() { }
  topEmployee: any = {
    name: 'Janis Martin',
    designation: 'CEO',
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'VP',
        subordinates: [
          {
            name: 'Tina Landry',
            designation: 'Budget Analyst',
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'VP',
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Web Manager',
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Art Director',
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'VP',
        subordinates: []
      }
    ]
  };
  ngOnInit() {
  }
  test(event){
    console.log(event);

  }
}
