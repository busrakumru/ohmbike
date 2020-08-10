import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetitionsPage } from './competitions.page';

describe('CompetitionsPage', () => {
  let component: CompetitionsPage;
  let fixture: ComponentFixture<CompetitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
