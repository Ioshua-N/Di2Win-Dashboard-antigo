import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonestTypesComponent } from './commonest-types.component';

describe('CommonestTypesComponent', () => {
  let component: CommonestTypesComponent;
  let fixture: ComponentFixture<CommonestTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonestTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonestTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
