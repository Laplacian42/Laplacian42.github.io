import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogoverviewComponent } from './blogoverview.component';

describe('BlogoverviewComponent', () => {
  let component: BlogoverviewComponent;
  let fixture: ComponentFixture<BlogoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
