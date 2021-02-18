import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestStringArrayComponent } from './pages/test-string-array/test-string-array.component';
import { SpyOnComponent } from './pages/spy-on/spy-on.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { AsyncTestingComponent } from './pages/async-testing/async-testing.component';
import { FormsModule } from '@angular/forms';
import { TestAttributeDirectiveComponent } from './pages/test-attribute-directive/test-attribute-directive.component';
import { HelloDirective } from './directives/hello.directive';
import { TestInputOutputModule } from './pages/test-input-output/test-input-output.module';

@NgModule({
  declarations: [
    AppComponent,
    TestStringArrayComponent,
    SpyOnComponent,
    ChangeDetectionComponent,
    AsyncTestingComponent,
    TestAttributeDirectiveComponent,
    HelloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TestInputOutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
