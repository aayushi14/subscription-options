import { Component, OnInit } from '@angular/core';
import {SubscriptionOption} from "../../services/subscription.model";
import {SubscriptionService} from "../../services/subscription.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-optionlist1',
  templateUrl: './optionList.component.html',
  styleUrls: ['./optionList.component.scss']
})
export class OptionListComponent implements OnInit {
  currentOption = {
    id: null as any,
    title: '',
    description: '',
    price: '',
    bgcolor: '',
    isBought: false,
    isClickable: true,
    page: null as any
  };
  subOptions: SubscriptionOption[] = [];
  currPage: number = 0;
  url: string = '';

  constructor(private subService: SubscriptionService, private router: Router) {}

  ngOnInit() {
    this.url = this.router.url;
    this.currPage = parseInt(this.url.substr(this.url.length - 1));
    this.getSubOptions();
  }

  public clickBuy(option: SubscriptionOption) {
    this.currentOption = option;
    for (let op of this.subOptions) {
      if (op.id !== option.id) {
        op.isClickable = !op.isClickable;
      }
      this.updateSubOption(op);
    }
    this.updateSubOption(this.currentOption);
    this.getSubOptions();
  }

  private getSubOptions() {
    this.subService.getSubscriptionOptions().subscribe(subOptions => this.subOptions = subOptions);
  }

  addSubOption() {
    const data = {
      id: this.currentOption.id,
      title: this.currentOption.title,
      description: this.currentOption.description,
      price: this.currentOption.price,
      bgcolor: this.currentOption.bgcolor,
      isBought: this.currentOption.isBought,
      isClickable: this.currentOption.isClickable,
      page: this.currentOption.page
    };
    this.subService.createSubscriptionOption(data).subscribe(response => {
      console.log(response);
      this.getSubOptions();
    });
  }

  updateSubOption(option: SubscriptionOption){
    this.subService.editSubscriptionOption(option).subscribe(response => console.log(response));
  }

  setSubOptionEdit(subOption: SubscriptionOption) {
    this.currentOption.id = subOption.id;
    this.currentOption.title = subOption.title;
    this.currentOption.description = subOption.description;
    this.currentOption.price = subOption.price;
    this.currentOption.bgcolor = subOption.bgcolor;
    this.currentOption.isBought = subOption.isBought;
    this.currentOption.isClickable = subOption.isClickable;
    this.currentOption.page = subOption.page;
  }

  removeSubOption(subOption: SubscriptionOption) {
    const id = subOption.id;
    this.subService.deleteSubscriptionOption(id).subscribe(subOption => console.log(subOption));
    this.getSubOptions();
  }
}
