import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextsizePage } from './textsize.page';

describe('TextsizePage', () => {
  let component: TextsizePage;
  let fixture: ComponentFixture<TextsizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextsizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
