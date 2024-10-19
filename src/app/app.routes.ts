import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'qr-code',
        loadComponent: () => import('./components/qr-code/qr-code.component').then(m => m.QrCodeComponent)
    }
];
