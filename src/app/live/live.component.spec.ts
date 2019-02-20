import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VgCoreModule } from 'videogular2/core';
import { VgStreamingModule } from 'videogular2/streaming';
import { LiveComponent } from './live.component';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { StreamService } from './stream.service';

describe('LiveComponent', () => {
  let component: LiveComponent;
  let fixture: ComponentFixture<LiveComponent>;
  let streamServiceStub: Partial<StreamService> = {
    isAlive: new BehaviorSubject(false).asObservable()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, VgCoreModule, VgStreamingModule],
      declarations: [LiveComponent],
      providers: [{ provide: StreamService, useValue: streamServiceStub }]
    }).compileComponents();
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
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert').textContent).toContain('Stream not available, come back later!');
  });

});
