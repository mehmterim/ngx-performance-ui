import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from '@ui/ui.module';
import { CoreModule } from '@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import * as _states from './shared/store';
import { LayoutPrimaryComponent } from './layouts';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LayoutPrimaryComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    NgxsModule.forRoot([_states.ToasterState]),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    SharedModule.forRoot(),
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
