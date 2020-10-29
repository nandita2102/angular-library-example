import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaLibExampleComponent } from './na-lib-example.component';

describe('NaLibExampleComponent', () => {
  let component: NaLibExampleComponent;
  let fixture: ComponentFixture<NaLibExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaLibExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaLibExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
