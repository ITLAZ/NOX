import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemCarritoConfirmadoComponent } from './item-carrito-confirmado.component';

describe('ItemCarritoConfirmadoComponent', () => {
  let component: ItemCarritoConfirmadoComponent;
  let fixture: ComponentFixture<ItemCarritoConfirmadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCarritoConfirmadoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCarritoConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
