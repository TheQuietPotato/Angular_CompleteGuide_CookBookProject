import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  @Output() sToEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }

  emitClickedLink(s: string) {
    this.sToEmit.emit(s);
  }
}