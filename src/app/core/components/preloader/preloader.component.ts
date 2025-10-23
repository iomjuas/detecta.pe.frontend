import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PreloaderService } from '../../preloader.service';

@Component({
  selector: 'app-preloader',
  standalone: false,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnDestroy {
  @Input() src = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/Logo-Detecta-Color.png';
  @Input() size = 112;         // px
  @Input() blurBackdrop = true;

  visible = false;
  private sub?: Subscription;
  private preloaderSvc = inject(PreloaderService);

  ngOnInit(): void {
    this.sub = this.preloaderSvc.visible$.subscribe(v => this.visible = v);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
