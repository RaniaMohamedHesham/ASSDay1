import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMeueComponent } from './side-meue.component';

describe('SideMeueComponent', () => {
  let component: SideMeueComponent;
  let fixture: ComponentFixture<SideMeueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMeueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
