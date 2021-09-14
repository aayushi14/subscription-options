import {CardComponent} from "./card.component";
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from "@angular/core/testing";
import {APP_BASE_HREF} from "@angular/common";
import {BrowserModule, By} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app-routing.module";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../../../material.module";
import {DataService} from "../../../data.services";
import {SubscriptionService} from "../../../services/subscription.service";
import {SubscriptionOption} from "../../../services/subscription.model";

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;
  const optionList: SubscriptionOption[] = [
    {
      'id': 1,
      'title': 'Starter',
      'description': 'Starter features for your business to grow.',
      'price': '1',
      'bgcolor': 'bg-gray',
      'isBought': false,
      'isClickable': true,
      'page': 1
    },
    {
      'id': 2,
      'title': 'Regular',
      'description': 'Regular features for your business to grow.',
      'price': '25',
      'bgcolor': 'bg-blue',
      'isBought': false,
      'isClickable': true,
      'page': 1
    },
    {
      'id': 3,
      'title': 'Professional',
      'description': 'Professional features for your business to grow.',
      'price': '75',
      'bgcolor': 'bg-purple',
      'isBought': false,
      'isClickable': true,
      'page': 2
    },
    {
      'id': 4,
      'title': 'Ultimate',
      'description': 'The ultimate set of features for your business to grow.',
      'price': '115',
      'bgcolor': 'bg-red',
      'isBought': false,
      'isClickable': true,
      'page': 2
    }
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/option-list-1' },
        {
          provide: SubscriptionService,
          useValue: { optionList: optionList }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the card', () => {
  //   const fixture = TestBed.createComponent(CardComponent);
  //   const card = fixture.componentInstance;
  //   expect(card).toBeTruthy();
  // });

  // it('#buyCancelRule() button called', fakeAsync(() => {
  //   const button = fixture.debugElement.nativeElement.querySelector(By.css('button'));
  //   expect(button).toBeTruthy();
  //   expect(component.option).toEqual(optionList[1]);
  //   console.log("button:  " + button.title);
  //   expect(button.title).toEqual('');
  //   component.option.isBought = true;
  //   fixture.detectChanges();
  //   tick();
  //   const updatedButton = fixture.debugElement.nativeElement.querySelector('button');
  //   expect(updatedButton.value).toEqual('');
  // }));

  // it('#buyCancelRule() should toggle #isBought', () => {
  //   const expectedData: SubscriptionOption[] = optionList;
  //
  //   expect(expectedData[1].isBought).toEqual(false);
  //   //expectedData[1].buyCancelRule();
  //   //expect(expectedData[1].isBought).toEqual(true);
  //   //expectedData[1].buyCancelRule();
  //   //expect(expectedData[1].isBought).toEqual(false);
  // });
});
