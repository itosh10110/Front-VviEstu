import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
        <button class="profile-btn" [routerLink]="['/perfil']">
          <i class="fa-user-circle fas"></i>
        </button>
      </div>
    </header>
  `,
  // Definición de los estilos CSS en línea
  styles: [`
    /* Línea azul superior (Mantener consistencia con el diseño pre-login) */
    :host {
      display: block;
      border-top: 5px solid #007bff; 
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      background-color: #ffffff;
    }

    .header-container {
      display: flex;
      /* space-between separa el logo, la navegación y el ícono de perfil */
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px; 
      height: 60px;
    }

    /* Estilo del Logo */
    .header-logo {
      flex-grow: 1; /* Permite que el logo ocupe más espacio si es necesario */
    }

    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      font-size: 24px;
      font-weight: 700;
      color: #5d4037; /* Marrón oscuro */
      margin-left: 5px; /* Espacio para el ícono de mapa (si se usa) */
    }

    /* Estilos de la Navegación (Enlaces) */
    .header-nav ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      font-weight: 500;
    }

    .header-nav li {
      margin: 0 25px; /* Espaciado entre los enlaces */
    }

    .nav-link {
      text-decoration: none;
      color: #333; /* Color oscuro para los enlaces */
      font-size: 16px;
      transition: color 0.3s;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #a0813f; /* Resalta el enlace activo con color corporativo */
    }

    /* Estilos del Ícono de Perfil */
    .profile-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px; /* Tamaño del ícono, como se ve en la imagen */
      color: #333;
      padding: 0;
      margin-left: 20px;
      line-height: 1;
    }

    .profile-btn:hover {
        color: #a0813f;
    }
  `]
})
export class NavbarUserComponent {
  navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Departamentos', path: '/departamentos' },
    { label: 'Comparar', path: '/comparar' },
  ];
}