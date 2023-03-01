import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  settings = {
    title: 'WorkTime Application',
    author: '2/14.szft',
    company: 'Bajai SZC Türr István Technikum',
    currency: 'Ft'
  }
}
