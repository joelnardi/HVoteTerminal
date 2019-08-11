import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorVotosPage } from './lector-votos.page';

describe('LectorVotosPage', () => {
  let component: LectorVotosPage;
  let fixture: ComponentFixture<LectorVotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectorVotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorVotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
