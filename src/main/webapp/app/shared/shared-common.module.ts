import { NgModule } from '@angular/core';

import { AgroAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [AgroAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [AgroAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AgroAppSharedCommonModule {}
