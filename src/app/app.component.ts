import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleShow = true;
  logArr: string[] = [];
  count = 1;
  togglePara() {
    this.toggleShow = !this.toggleShow;
    this.addLog();
  }
  addLog() {
    this.logArr.push('Love you' + this.count);
    this.count++;
  }
  getColor(id) {
    return id > 5 ? true : false;
  }
  getColor1(id) {
    return id > 5 ? 'red': 'transparent';
  }
}
