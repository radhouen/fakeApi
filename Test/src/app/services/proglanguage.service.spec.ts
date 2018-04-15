import { TestBed, inject } from '@angular/core/testing';

import { ProglanguageService } from './proglanguage.service';

describe('ProglanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProglanguageService]
    });
  });

  it('should be created', inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service).toBeTruthy();
  }));
});
