import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="header-container">
      <div class="header-logo">
        <a [routerLink]="['/']" class="logo-link">
          <span class="logo-text">ViviEstu</span>
        </a>
      </div>

      <nav class="header-nav">
        <ul>
          <li *ngFor="let item of navItems">
            <a [routerLink]="[item.path]" routerLinkActive="active" class="nav-link">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <button class="primary-button" [routerLink]="[primaryButton.path]">
          {{ primaryButton.label }}
        </button>
      </div>
    </header> `,
  styles: [`
    /* Línea azul superior */
    :host {
      display: block;
      border-top: 5px solid #007bff; /* Color azul para la línea superior */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      background-color: #ffffff;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px;
      height: 60px;
    }

    /* Logo */
    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      font-size: 24px;
      font-weight: 700; /* Negrita */
      color: #5d4037; /* Marrón oscuro, similar al de la imagen */
    }

    /* Navegación */
    .header-nav ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
    }

    .header-nav li {
      margin: 0 20px;
    }

    .nav-link {
      text-decoration: none;
      color: #6c757d;
      font-size: 16px;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #333333;
    }

    /* Botón */
    .primary-button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      /* Color marrón-dorado de la imagen */
      background-color: #a0813f; 
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .primary-button:hover {
      background-color: #8c7038;
    }
  `]
})
export class HeaderComponent {}