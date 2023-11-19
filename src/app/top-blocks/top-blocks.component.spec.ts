import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBlocksComponent } from './top-blocks.component';

describe('TopBlocksComponent', () => {
  let component: TopBlocksComponent;
  let fixture: ComponentFixture<TopBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBlocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
