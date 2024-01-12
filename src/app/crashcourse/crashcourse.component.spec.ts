import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashcourseComponent } from './crashcourse.component';

describe('CrashcourseComponent', () => {
  let component: CrashcourseComponent;
  let fixture: ComponentFixture<CrashcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrashcourseComponent]
    });
    fixture = TestBed.createComponent(CrashcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
