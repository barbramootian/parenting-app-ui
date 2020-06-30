import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFamilyMemberPage } from './add-family-member.page';

describe('AddFamilyMemberPage', () => {
  let component: AddFamilyMemberPage;
  let fixture: ComponentFixture<AddFamilyMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamilyMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFamilyMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
