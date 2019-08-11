import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lector-votos',
  templateUrl: './lector-votos.page.html',
  styleUrls: ['./lector-votos.page.scss'],
})
export class LectorVotosPage implements OnInit {
  qrData = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }
}
