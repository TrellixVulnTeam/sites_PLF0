import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {

  constructor(public el: ElementRef) {
  }

  changeMe() {
    let src: any = this.el.nativeElement.src;
    console.log(src);
    return  this.el.nativeElement.src;
  }


}
