import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() option: any;
  @Output() buyClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buyCancelRule() {
    this.option.isBought = !this.option.isBought;
    this.buyClick.emit(this.option);
  }

}
