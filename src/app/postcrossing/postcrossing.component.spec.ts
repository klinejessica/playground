import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcrossingComponent } from './postcrossing.component';

describe('PostcrossingComponent', () => {
  let component: PostcrossingComponent;
  let fixture: ComponentFixture<PostcrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcrossingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
