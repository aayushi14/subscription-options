import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {SubscriptionOption} from "./subscription.model";
import {SubscriptionService} from "./subscription.service";

describe('SubscriptionService', () => {
  let httpTestingController: HttpTestingController;
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(SubscriptionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: SubscriptionService = TestBed.inject(SubscriptionService);
    expect(service).toBeTruthy();
  });

  it('#getSubscriptionOptions should return expected data', (done) => {
    const expectedData: SubscriptionOption[] = [
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

    service.getSubscriptionOptions().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('api/subscriptionOptions/');

    testRequest.flush(expectedData);
  });

  it('#getSubscriptionOptions should use GET to retrieve data', () => {
    service.getSubscriptionOptions().subscribe();

    const testRequest = httpTestingController.expectOne('api/subscriptionOptions/');

    expect(testRequest.request.method).toEqual('GET');
  });
});
