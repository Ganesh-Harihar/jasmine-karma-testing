import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';

import { AsyncTestingComponent } from './async-testing.component';

describe('AsyncTestingComponent', () => {
  let component: AsyncTestingComponent;
  let fixture: ComponentFixture<AsyncTestingComponent>;
  let debugElement: DebugElement;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncTestingComponent],
      imports: [FormsModule],
      providers: [ProductService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncTestingComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductService);
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test searching functionality is right using "done"', (done) => {
    component.searchText = 'hot';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.filterProductList();

    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      let product = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(product.toLocaleLowerCase()).toContain(component.searchText);
      done();
    })
  })


  it('should test searching functionality is right using "async whenstable"', async(() => {
    component.searchText = 'hot';
    component.filterProductList();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let product = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(product.toLocaleLowerCase()).toContain(component.searchText);

    })
  }));


  it('should test searching functionality is right using "fakeAsync tick"', fakeAsync(() => {
    component.searchText = 'hot';
    component.filterProductList();
    tick();
    fixture.detectChanges();
    let product = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    expect(product.toLocaleLowerCase()).toContain(component.searchText);
  }));

});
