import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestuserPage } from './testuser.page';

describe('TestuserPage', () => {
  let component: TestuserPage;
  let fixture: ComponentFixture<TestuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
