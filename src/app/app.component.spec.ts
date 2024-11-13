import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  (['formOnSubmit', 'formOnBlur', 'formOnChange'] as const).forEach((formName) => {
    it(`should have as have a form: ${formName}`, fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app[formName]).toBeTruthy();
    }));
  });

  xit('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('h1').textContent).toContain('Example translation validation');
  }));
});
