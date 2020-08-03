import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MRoutePage } from './m-route.page';

describe('MRoutePage', () => {
  let component: MRoutePage;
  let fixture: ComponentFixture<MRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
