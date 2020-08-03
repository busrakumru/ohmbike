import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextgroessePage } from './textgroesse.page';

describe('TextgroessePage', () => {
  let component: TextgroessePage;
  let fixture: ComponentFixture<TextgroessePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextgroessePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextgroessePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
