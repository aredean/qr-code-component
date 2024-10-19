import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    QrCodeComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'qr-code-generator';

  qrcodeText = '';
  qrcodeTitle = '';
  qrcodeSubtitle = '';

}
