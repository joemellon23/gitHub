import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LayoutModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
