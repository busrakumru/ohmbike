import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilbearbeitenPage } from './profilbearbeiten.page';

describe('ProfilbearbeitenPage', () => {
  let component: ProfilbearbeitenPage;
  let fixture: ComponentFixture<ProfilbearbeitenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilbearbeitenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilbearbeitenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
