import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as yearStart 2019`, () => {
    expect(component.yearStart).toEqual(2019);
  });

  it(`should have as yearCurrent the current year`, () => {
    expect(component.yearCurrent).toEqual(new Date().getFullYear());
  });

  it('should set the yearValue to the current year when diff 0', () => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.yearStart = 2019;
    component.yearCurrent = 2019;
    fixture.detectChanges();
    expect(component.yearValue).toEqual(String(component.yearCurrent));
  });

  it('should set the yearValue to a range when diff > 0', () => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.yearStart = 2018;
    component.yearCurrent = 2019;
    fixture.detectChanges();
    expect(component.yearValue).toEqual(component.yearStart + ' - ' + component.yearCurrent);
  });

  it('should render the copyright notice in the footer', () => {
    expect(compiled.querySelector('span').textContent).toContain('Marco Marasca All Rights Reserved');
  });

  it('should render the yearValue in the footer', () => {
    expect(compiled.querySelector('span').textContent).toContain(component.yearValue);
  });

});
