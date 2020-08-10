import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotedAktvComponent } from './noted-aktv.component';

describe('NotedAktvComponent', () => {
  let component: NotedAktvComponent;
  let fixture: ComponentFixture<NotedAktvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotedAktvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotedAktvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
