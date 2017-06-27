/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrototypeComponent } from './prototype.component';
import { PrototypeService } from 'app/prototype/shared/prototype.service';
import { PrototypeFakeService } from 'app/prototype/shared/prototype.fake.service';

describe('PrototypeComponent', () => {
  let component: PrototypeComponent;
  let fixture: ComponentFixture<PrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypeComponent ],
      providers: [{provide: PrototypeService, useClass: PrototypeFakeService}]//,
    })
    .compileComponents();
  }));

  beforeEach(() => {
   fixture = TestBed.createComponent(PrototypeComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title of proto works!', () => {
   expect(component.title).toEqual('proto works!');
  });

  it('should resolve test data', () => {
    expect(component.data[0].name).toEqual('test');
  });
});