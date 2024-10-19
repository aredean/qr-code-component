import { Component, input, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {

  qrcode = signal<string>('');
  qrcodeText = input<string>('');
  title = input<string>('');
  subtitle = input<string>('');

  onQrcodeTextChange(){
    this.generateQR(this.qrcodeText());
  }

  editToggle : boolean = false;

  toggleEdit(){
    this.editToggle = !this.editToggle;
  }



  generateQR(text: string) {
    QRCode.toDataURL(text, {
      type : 'image/png',
      margin : 0,
      color : {
        dark : '#FFF',
        light : '#0000'
      },
      
    })
    .then(url => {
      this.qrcode.set(url);
    })
    .catch(err => {
      console.error(err)
    })
  }

  ngOnInit(){
    this.generateQR('https://www.frontendmentor.io/');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.generateQR(this.qrcodeText());
  }

}
