import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInterview } from './book-interview';

describe('BookInterview', () => {
  let component: BookInterview;
  let fixture: ComponentFixture<BookInterview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookInterview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookInterview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
