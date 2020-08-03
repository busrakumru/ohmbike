import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffeneAktvComponent } from './offene-aktv.component';

describe('OffeneAktvComponent', () => {
  let component: OffeneAktvComponent;
  let fixture: ComponentFixture<OffeneAktvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffeneAktvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffeneAktvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
