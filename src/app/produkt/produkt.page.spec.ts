import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduktPage } from './produkt.page';

describe('ProduktPage', () => {
  let component: ProduktPage;
  let fixture: ComponentFixture<ProduktPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
