import { Component } from '@angular/core';

@Component({
  selector: 'app-numberInfo',
  template: `
    <div>
      <h1>Call me</h1>
      <p>Chicago, US</p>
      <p>+00 123456789</p>
      <p>test@text.com</p>
    </div>
    `,
  styles: [`
    div{
      background: #616161;
      width: 100%;
      height: 550px;
      color: white;
      text-align: center;
    }
    h1{
      margin: 0;
    }
  `]
})

export class NumberInfoComponent {}
