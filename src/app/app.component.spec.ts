import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoTestingModule } from './test/transloco-testing.module';
import { NgxTvModule } from 'ngx-translation-validation';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, getTranslocoTestingModule(), NgxTvModule.forRoot()],
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

  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Example translation validation');
  }));
});
