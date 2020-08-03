import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KatalogPage } from './katalog.page';

describe('KatalogPage', () => {
  let component: KatalogPage;
  let fixture: ComponentFixture<KatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatalogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
