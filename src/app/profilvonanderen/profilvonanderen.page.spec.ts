import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilvonanderenPage } from './profilvonanderen.page';

describe('ProfilvonanderenPage', () => {
  let component: ProfilvonanderenPage;
  let fixture: ComponentFixture<ProfilvonanderenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilvonanderenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilvonanderenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
