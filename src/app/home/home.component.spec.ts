import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../button/button.component';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

import { StreamService } from '../live/stream.service';
import { BehaviorSubject } from 'rxjs';

describe('HomeComponent', () => {
  let streamServiceStub: Partial<StreamService> = {
    isAlive: new BehaviorSubject(false).asObservable()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ButtonComponent, HomeComponent],
      providers: [{ provide: StreamService, useValue: streamServiceStub }]
    })
      .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should only create the apps in the list', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.componentInstance;
    component.apps = [
      {name: 'Test', route: 'redirect', url: 'test', icon: 'test'}
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-button').length).toBe(1);
  });

  it('should only not subscribe to the stream service when not live app is available', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.componentInstance;
    component.apps = [
      {name: 'Test', route: 'redirect', url: 'test', icon: 'test'}
    ];
    fixture.detectChanges();
    expect(component['streamServiceSub']).toBeUndefined();
  });

  it('should set the live component disabled status', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.componentInstance;
    component.apps = [
      {name: 'Live', route: 'live', icon: 'live'}
    ];
    fixture.detectChanges();
    expect(component['streamServiceSub']).toBeTruthy();
    expect(component.apps[0].disabled).toBeTruthy();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-button').length).toBe(1);
  });

});
