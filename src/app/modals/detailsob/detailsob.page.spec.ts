import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsobPage } from './detailsob.page';

describe('DetailsobPage', () => {
  let component: DetailsobPage;
  let fixture: ComponentFixture<DetailsobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
