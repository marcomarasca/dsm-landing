import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.app = {
      name: 'Test App',
      icon: 'test',
      route: 'test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should use the input app`, () => {
    expect(component.app.name).toEqual('Test App');
    expect(component.app.icon).toEqual('test');
    expect(component.app.route).toEqual('test');
  });

  it('should use the correct icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fa-' + component.app.icon)).toBeTruthy();
  });

  it('should set the correct name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('span')[1].textContent).toContain(component.app.name);
  });

  it('should disable the button when the app is disabled', () => {
    const fixtureDisabled = TestBed.createComponent(ButtonComponent);
    const componentDisabled = fixtureDisabled.componentInstance;
    componentDisabled.app = {
      name: 'Test Disabled',
      icon: 'test',
      route: 'test',
      disabled: true
    };
    fixtureDisabled.detectChanges();
    const compiled = fixtureDisabled.debugElement.nativeElement;
    expect(compiled.querySelector('.icon-disabled')).toBeTruthy();
  });

  it('should add the redirect icon when the route is redirect', () => {
    const fixtureRedirect = TestBed.createComponent(ButtonComponent);
    const componentRedirect = fixtureRedirect.componentInstance;
    componentRedirect.app = {
      name: 'Test Disabled',
      icon: 'test',
      route: 'redirect'
    };
    fixtureRedirect.detectChanges();
    const compiled = fixtureRedirect.debugElement.nativeElement;
    expect(compiled.querySelector('.icon-redirect')).toBeTruthy();
  });

});
