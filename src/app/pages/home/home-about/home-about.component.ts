import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-home-about',
  standalone: false,
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss'
})
export class HomeAboutComponent implements OnInit, OnDestroy {
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;


  ngOnInit(): void {
    // respeta "reduce motion"
    const reduce = typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (reduce) {
      this.host.nativeElement.classList.add('is-visible');
      return;
    }

    this.io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.host.nativeElement.classList.add('is-visible');
          this.io?.disconnect(); // solo una vez
        }
      });
    }, { threshold: 0.15 });

    this.io.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
