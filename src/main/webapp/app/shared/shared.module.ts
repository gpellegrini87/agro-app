import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgroAppSharedLibsModule, AgroAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AgroAppSharedLibsModule, AgroAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AgroAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgroAppSharedModule {
  static forRoot() {
    return {
      ngModule: AgroAppSharedModule
    };
  }
}
