import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPictureComponent } from './big-picture.component';

describe('BigPictureComponent', () => {
  let component: BigPictureComponent;
  let fixture: ComponentFixture<BigPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
