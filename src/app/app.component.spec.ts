import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {ConfigureFn, configureTests} from '@lib/testing';

import {AngularFireDatabase} from '@angular/fire/database';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  const db = {
    list: () => {
      return {
        valueChanges: () => {}
      };
    }
  };

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [NoopAnimationsModule],
        providers: [
          { provide: AngularFireDatabase, useValue: db}
        ],
        schemas: [NO_ERRORS_SCHEMA],
      });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    const app = component;
    expect(app).toBeTruthy();
  }));
});

test.todo('test success');
