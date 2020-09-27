import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAulaComponent } from './list-aula.component';

describe('ListAulaComponent', () => {
  let component: ListAulaComponent;
  let fixture: ComponentFixture<ListAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
