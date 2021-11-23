import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  
  styles: [
    `
    p {
      
      color: green;
      height: 25px;
      width: 200px;
      border: 1px solid #e2e8ea;
      padding: 44px;
      box-shadow: 2px -1px 3px 2px #ebe5e5, -2px 1px 4px 2px #ebe5e5;
      
    }
    `
    
    
    
      ]
    
    })
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
