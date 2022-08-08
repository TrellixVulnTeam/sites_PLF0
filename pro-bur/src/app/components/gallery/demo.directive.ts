import {Directive, HostListener, ElementRef} from "@angular/core";

@Directive({
  selector: '[appDemo]'
})

export class DemoDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  imageChange() {
    let src: any = this.el.nativeElement.src
    let prev: any = document.getElementById('preview')
    prev.src = src
    let imageSlide = document.getElementsByClassName('imgSlide')
    for (let i = 0; i < imageSlide.length; i++) {
      imageSlide[i].classList.remove('active')
    }
    this.el.nativeElement.parentElement.classList.add('active')
  }
}
