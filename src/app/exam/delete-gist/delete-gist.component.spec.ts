import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGistComponent } from './delete-gist.component';

describe('DeleteGistComponent', () => {
  let component: DeleteGistComponent;
  let fixture: ComponentFixture<DeleteGistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
