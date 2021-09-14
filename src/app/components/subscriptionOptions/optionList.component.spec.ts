import {OptionListComponent} from "./optionList.component";
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from "@angular/core/testing";
import {SubscriptionOption} from "../../services/subscription.model";
import {APP_BASE_HREF} from "@angular/common";
import {SubscriptionService} from "../../services/subscription.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "../../data.services";
import {RouterTestingModule} from "@angular/router/testing";

describe('OptionListComponent', () => {
  let fixture: ComponentFixture<OptionListComponent>;
  let component: OptionListComponent;
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
      declarations: [OptionListComponent],
      imports: [HttpClientInMemoryWebApiModule.forRoot(DataService), RouterTestingModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: SubscriptionService,
          useValue: { optionList: optionList }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the page', () => {
  //   const fixture = TestBed.createComponent(OptionListComponent);
  //   const ol = fixture.componentInstance;
  //   expect(ol).toBeTruthy();
  // });

  // it('"SubscriptionOption should have appropriate fields and types"', () => {
  //   const obj: SubscriptionOption = {
  //     'id': 5,
  //     'title': 'Starter',
  //     'description': 'Starter features for your business to grow.',
  //     'price': '1',
  //     'bgcolor': 'bg-gray',
  //     'isBought': false,
  //     'isClickable': true,
  //     'page': 1
  //   };
  //   expect(obj.title).toEqual('Starter');
  // });

  // it('#clickBuy() button called', fakeAsync(() => {
  //   spyOn(component, 'clickBuy');
  //
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  //
  //   tick();
  //   expect(component.clickBuy).toHaveBeenCalled();
  // }));
});
