import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Produkt2Page } from './produkt2.page';

describe('Produkt2Page', () => {
  let component: Produkt2Page;
  let fixture: ComponentFixture<Produkt2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produkt2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Produkt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
