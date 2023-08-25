import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoePagesComponent } from './shoe-pages.component';

describe('ShoePagesComponent', () => {
  let component: ShoePagesComponent;
  let fixture: ComponentFixture<ShoePagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoePagesComponent]
    });
    fixture = TestBed.createComponent(ShoePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
