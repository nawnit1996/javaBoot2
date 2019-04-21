import { TestBed } from '@angular/core/testing';

import { AddEditPageService } from './add-edit-page.service';

describe('AddEditPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditPageService = TestBed.get(AddEditPageService);
    expect(service).toBeTruthy();
  });
});
