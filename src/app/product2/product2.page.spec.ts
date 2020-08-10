import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Product2Page } from './product2.page';

describe('Product2Page', () => {
  let component: Product2Page;
  let fixture: ComponentFixture<Product2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Product2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
