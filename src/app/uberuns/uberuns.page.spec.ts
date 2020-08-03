import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UberunsPage } from './uberuns.page';

describe('UberunsPage', () => {
  let component: UberunsPage;
  let fixture: ComponentFixture<UberunsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UberunsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UberunsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
