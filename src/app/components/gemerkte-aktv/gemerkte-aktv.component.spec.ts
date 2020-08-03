import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemerkteAktvComponent } from './gemerkte-aktv.component';

describe('GemerkteAktvComponent', () => {
  let component: GemerkteAktvComponent;
  let fixture: ComponentFixture<GemerkteAktvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemerkteAktvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemerkteAktvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
