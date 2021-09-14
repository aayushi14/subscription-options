import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {OptionListComponent} from "../components/subscriptionOptions/optionList.component";
import {CardComponent} from "../components/shared/card/card.component";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule, By} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../data.services";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material.module";
import {RouterLinkDirectiveStub} from "../testing/router-link-directive-stub";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        OptionListComponent,
        CardComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();

    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // trigger initial data binding

    // find DebugElements with an attached RouterLinkStubDirective
    let linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    //routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title as 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain('MyApp');
  });

  // it('can get RouterLinks from template', () => {
  //   expect(routerLinks.length).toEqual(2);
  //   expect(routerLinks[0].linkParams).toEqual('/option-list-1');
  //   expect(routerLinks[1].linkParams).toEqual('/option-list-2');
  // });
});
