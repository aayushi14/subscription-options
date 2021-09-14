import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

// Angular service then implements the createDb method of the InMemoryDbService interface
export class DataService implements InMemoryDbService {
  constructor() {}

  // creates an object in memory that represents my database
  createDb() {
    let subscriptionOptions = [
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
    return {subscriptionOptions};
  }
}
