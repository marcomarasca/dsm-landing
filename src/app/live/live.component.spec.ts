import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgCoreModule } from 'videogular2/core';
import { VgStreamingModule } from 'videogular2/streaming';
import { LiveComponent } from './live.component';

describe('LiveComponent', () => {
  let component: LiveComponent;
  let fixture: ComponentFixture<LiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgCoreModule, VgStreamingModule],
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
});
