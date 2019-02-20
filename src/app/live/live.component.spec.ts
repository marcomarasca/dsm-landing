import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VgCoreModule } from 'videogular2/core';
import { VgStreamingModule } from 'videogular2/streaming';
import { LiveComponent } from './live.component';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

describe('LiveComponent', () => {
  let component: LiveComponent;
  let fixture: ComponentFixture<LiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, VgCoreModule, VgStreamingModule],
      declarations: [ LiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should use the stream url`, () => {
    expect(component.stream).toEqual(environment.streamUrl);
  });

  it('should set the observable', () => {
    expect(component.isAlive).toBeTruthy();
  });

  it('should show an alert when the stream is not available', () => {
    const fixtureDisabled = TestBed.createComponent(LiveComponent);
    const componentDisabled = fixtureDisabled.componentInstance;
    componentDisabled.isAlive = new BehaviorSubject<boolean>(false);
    fixtureDisabled.detectChanges();
    const compiled = fixtureDisabled.debugElement.nativeElement;
    expect(compiled.querySelector('.alert').textContent).toContain('Stream not available, come back later!');
  });

});
