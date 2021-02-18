import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestInputOutputParentComponent } from './test-input-output-parent/test-input-output-parent.component';
import { TestInputOutputChildComponent } from './test-input-output-child/test-input-output-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestInputOutputParentComponent, TestInputOutputChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TestInputOutputParentComponent]
})
export class TestInputOutputModule { }
