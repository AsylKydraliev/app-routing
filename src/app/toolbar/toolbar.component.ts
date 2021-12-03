import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  {
  @Output() navigate = new EventEmitter<string>();

  onNavClick(where: string){
    this.navigate.emit(where);
  }
}
