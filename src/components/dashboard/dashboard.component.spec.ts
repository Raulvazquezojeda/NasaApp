import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NasaService } from '../../app/providers/nasa.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const nasaServiceStub = () => ({
      getData: today => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: NasaService, useFactory: nasaServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`data has default value`, () => {
    expect(component.data).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getData').and.callThrough();
      component.ngOnInit();
      expect(component.getData).toHaveBeenCalled();
    });
  });

  describe('getData', () => {
    it('makes expected calls', () => {
      const nasaServiceStub: NasaService = fixture.debugElement.injector.get(
        NasaService
      );
      spyOn(nasaServiceStub, 'getData').and.callThrough();
      component.getData();
      expect(nasaServiceStub.getData).toHaveBeenCalled();
    });
  });
});
