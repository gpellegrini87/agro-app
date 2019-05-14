import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'proveedor',
        loadChildren: './proveedor/proveedor.module#AgroAppProveedorModule'
      },
      {
        path: 'cliente',
        loadChildren: './cliente/cliente.module#AgroAppClienteModule'
      },
      {
        path: 'pedido',
        loadChildren: './pedido/pedido.module#AgroAppPedidoModule'
      },
      {
        path: 'presupuesto',
        loadChildren: './presupuesto/presupuesto.module#AgroAppPresupuestoModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgroAppEntityModule {}
