import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFieldComponent } from './content-field.component';

describe('ContentFieldComponent', () => {
  let component: ContentFieldComponent;
  let fixture: ComponentFixture<ContentFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
