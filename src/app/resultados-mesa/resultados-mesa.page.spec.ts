import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ResultadosMesaPage } from './resultados-mesa.page';

describe('ResultadosMesaPage', () => {
  let component: ResultadosMesaPage;
  let fixture: ComponentFixture<ResultadosMesaPage>;
  let resultadosMesaPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosMesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ResultadosMesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    resultadosMesaPage = fixture.nativeElement;
    const items = resultadosMesaPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
