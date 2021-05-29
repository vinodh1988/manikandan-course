import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() service:any;
smallview:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  handleDefault(){
    this.smallview = !this.smallview;
  }
}
