import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbgeschlosseneAktvComponent } from './abgeschlossene-aktv.component';

describe('AbgeschlosseneAktvComponent', () => {
  let component: AbgeschlosseneAktvComponent;
  let fixture: ComponentFixture<AbgeschlosseneAktvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbgeschlosseneAktvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbgeschlosseneAktvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
