import { Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AccordionComponent } from './accordion/accordion.component';

export const routes: Routes = [
    {path: "ag-grid", component: AgGridComponent},
    {path: "accordion", component: AccordionComponent}
];
