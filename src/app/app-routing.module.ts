import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncTestingComponent } from './pages/async-testing/async-testing.component';
import { TestAttributeDirectiveComponent } from './pages/test-attribute-directive/test-attribute-directive.component';
import { TestInputOutputParentComponent } from './pages/test-input-output/test-input-output-parent/test-input-output-parent.component';

const routes: Routes = [
  { path: 'async-testing', component: AsyncTestingComponent },
  { path: 'test-attribute-directive', component: TestAttributeDirectiveComponent },
  { path: 'test-input-output', component: TestInputOutputParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }