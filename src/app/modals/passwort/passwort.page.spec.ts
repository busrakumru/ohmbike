import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswortPage } from './passwort.page';

describe('PasswortPage', () => {
  let component: PasswortPage;
  let fixture: ComponentFixture<PasswortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
