import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WettbewerbPage } from './wettbewerb.page';

describe('WettbewerbPage', () => {
  let component: WettbewerbPage;
  let fixture: ComponentFixture<WettbewerbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WettbewerbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WettbewerbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
