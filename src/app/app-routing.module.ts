import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncTestingComponent } from './pages/async-testing/async-testing.component';
import { TestAttributeDirectiveComponent } from './pages/test-attribute-directive/test-attribute-directive.component';
import { TestInputOutputParentComponent } from './pages/test-input-output/test-input-output-parent/test-input-output-parent.component';
import { TestReactiveFormComponent } from './pages/test-reactive-form/test-reactive-form.component';
import { TestTemplateDrivenFormComponent } from './pages/test-template-driven-form/test-template-driven-form.component';

const routes: Routes = [
  { path: 'async-testing', component: AsyncTestingComponent },
  { path: 'test-attribute-directive', component: TestAttributeDirectiveComponent },
  { path: 'test-input-output', component: TestInputOutputParentComponent },
  { path: 'test-reactive-form', component: TestReactiveFormComponent },
  { path: 'test-template-driven-form', component: TestTemplateDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
