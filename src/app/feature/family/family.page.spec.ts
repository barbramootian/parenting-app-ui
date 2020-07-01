import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyPage } from './family.page';

describe('FamilyPage', () => {
  let component: FamilyPage;
  let fixture: ComponentFixture<FamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
