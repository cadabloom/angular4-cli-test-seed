/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrototypeService } from './prototype.service';
import { PrototypeFakeService } from 'app/prototype/shared/prototype.fake.service';

describe('Service: Prototype', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide:PrototypeService, useClass: PrototypeFakeService }]
    });
  });

  it('should ...', inject([PrototypeService], (service: PrototypeService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a method name getMessage that returns "fake service string"', inject([PrototypeService], (service: PrototypeService) => {
    expect(service.getMessage()).toBe('fake service string');
  }));

});