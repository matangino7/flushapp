import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  videoSource = '../../assets/video (2160p).mp4';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen(this.videoPlayer.nativeElement, 'loadedmetadata', () => {
      this.videoPlayer.nativeElement.play();
    });
  }
}
