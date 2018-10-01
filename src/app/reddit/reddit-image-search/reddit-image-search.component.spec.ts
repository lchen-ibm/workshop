import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditImageSearchComponent } from './reddit-image-search.component';

describe('RedditImageSearchComponent', () => {
  let component: RedditImageSearchComponent;
  let fixture: ComponentFixture<RedditImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RedditImageSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
