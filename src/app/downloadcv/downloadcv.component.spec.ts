import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadcvComponent } from './downloadcv.component';

describe('DownloadcvComponent', () => {
  let component: DownloadcvComponent;
  let fixture: ComponentFixture<DownloadcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
