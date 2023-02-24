import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaschenrechnerComponent } from './taschenrechner.component';

describe('TaschenrechnerComponent', () => {
  let component: TaschenrechnerComponent;
  let fixture: ComponentFixture<TaschenrechnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaschenrechnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaschenrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
