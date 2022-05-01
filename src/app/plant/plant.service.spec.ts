/* tslint:disable:no-unused-variable */

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed, inject} from '@angular/core/testing';
import {PlantService} from './plant.service';

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService]
    });
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
