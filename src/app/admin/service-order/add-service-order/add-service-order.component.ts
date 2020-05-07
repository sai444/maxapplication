import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-service-order',
  templateUrl: './add-service-order.component.html',
  styleUrls: ['./add-service-order.component.scss']
})
export class AddServiceOrderComponent implements OnInit {
  @Input() title: string;
  @Input() events: string[];
  constructor() { }

  ngOnInit() {
  }

}
