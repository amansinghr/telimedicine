import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vediocall',
  templateUrl: './vediocall.component.html',
  styleUrls: ['./vediocall.component.css']
})
export class VediocallComponent {
  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;

  constructor() { }

  async startVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.localVideo.nativeElement.srcObject = stream;
    } catch(err) {
      console.error('Error accessing the camera and microphone', err);
    }
  }
}
