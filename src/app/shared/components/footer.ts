import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-footer', //como se va a llamar al componente
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer-container">
      <div class="footer-content">
        
        <div class="footer-column info-column">
          <div class="footer-logo">
            <span class="logo-text">ViviEstu</span> 
          </div>
          
          <address class="contact-details">
            <a href="mailto:{{ contactInfo.email }}" class="contact-link">{{ contactInfo.email }}</a>
            <p>{{ contactInfo.phone }}</p>
            <p>{{ contactInfo.addressLine1 }}</p>
            <p>{{ contactInfo.addressLine2 }}</p>
          </address>
          
          <div class="social-links">
            <a *ngFor="let social of socialLinks" 
               [href]="social.url" 
               target="_blank" 
               class="social-icon">
              <i class="fab {{ social.icon }}"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-column nav-column">
          <h4 class="column-title">Enlaces</h4>
          <ul class="nav-list">
            <li *ngFor="let link of navLinks">
              <a [routerLink]="[link.path]" class="nav-link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-column empty-column"></div>
        
      </div>

      <div class="footer-bottom">
        <p>© 2025 ViviEstu. Derechos Reservados</p>
      </div>
    </footer>
  `,
  // Definición de los estilos CSS en línea
  styles: [`
    .footer-container {
      background-color: #f8f8f8;
      padding: 40px 80px 15px 80px;
      font-family: Arial, sans-serif;
      color: #333;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    .footer-column {
      width: 30%; 
    }
    
    .info-column {
        width: 35%;
    }

    /* Logo */
    .logo-text {
      font-size: 24px;
      font-weight: 700;
      color: #333;
      margin-bottom: 20px;
      display: block;
    }

    /* Contacto */
    .contact-details p, .contact-details a {
      margin: 5px 0;
      font-size: 14px;
      line-height: 1.5;
      color: #6c757d;
      text-decoration: none;
      display: block;
    }

    .contact-link {
        font-weight: 600;
    }

    /* Redes Sociales */
    .social-links {
      margin-top: 15px;
    }

    .social-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 50%;
      color: #6c757d;
      transition: background-color 0.3s;
    }

    .social-icon:hover {
        background-color: #a0813f;
        color: white;
    }

    /* Navegación */
    .column-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-list li {
      margin-bottom: 8px;
    }

    .nav-link {
      text-decoration: none;
      color: #6c757d;
      font-size: 14px;
    }

    .nav-link:hover {
      color: #333;
    }

    /* Base del Footer */
    .footer-bottom {
      border-top: 1px solid #e0e0e0;
      padding-top: 15px;
      text-align: right;
    }

    .footer-bottom p {
      margin: 0;
      font-size: 12px;
      color: #6c757d;
    }
  `]
})
export class FooterComponent {
  contactInfo = {
    email: 'contacto@viviestuapp.com',
    phone: '+51 987 654 321',
    addressLine1: 'ANGAMOS ESTE 6767,',
    addressLine2: 'LIMA 54321 PERU'
  };

  navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Quienes somos', path: '/quienes-somos' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Únete', path: '/registro' },
  ];

  socialLinks = [
    { icon: 'fa-facebook-f', url: 'https://facebook.com/viviestu' },
    { icon: 'fa-instagram', url: 'https://instagram.com/viviestu' },
    { icon: 'fa-linkedin-in', url: 'https://linkedin.com/company/viviestu' },
  ];
}