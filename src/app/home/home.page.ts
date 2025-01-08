import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner, IonButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
//import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonSpinner, IonHeader, IonToolbar, IonTitle, IonContent],
  standalone: true
})
export class HomePage {

  capturedImage: string | null = null; // Imagen capturada
  extractedText: string | null = null; // Texto extraído
  isProcessing: boolean = false; // Indicador de procesamiento

  constructor() {}

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
    //this.performOCR(this.capturedImage);
  }

  /* async performOCR(base64Image: string) {
    this.isProcessing = true;

    // Crea un trabajador para realizar OCR
    const worker = await createWorker();
    try {
      await worker.load();
      const { data: { text } } = await worker.recognize(base64Image);
      console.log(text);
      await worker.terminate();
      this.extractedText = text;
      this.isProcessing = false;
    } catch (error) {
      console.log(error);
    }
  } */
}
