import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',

  styles: [
`
p {
  
  color: red;
  height: 25px;
  width: 200px;
  border: 1px solid #e2e8ea;
  padding: 44px;
  position: relative;
 
}
`



  ]

})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
