import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoViewComponent } from './endereco-view.component';

describe('EnderecoViewComponent', () => {
  let component: EnderecoViewComponent;
  let fixture: ComponentFixture<EnderecoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
