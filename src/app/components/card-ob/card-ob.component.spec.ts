import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardOBComponent } from './card-ob.component';

describe('CardOBComponent', () => {
  let component: CardOBComponent;
  let fixture: ComponentFixture<CardOBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOBComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardOBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
