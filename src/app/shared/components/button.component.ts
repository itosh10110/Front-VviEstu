import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button 
      class="primary-btn" 
      [attr.disabled]="disabled ? true : null" 
      (click)="btnClick.emit()">
      
      {{ label }}
    </button>
  `,
  styles: [`
    .primary-btn {
      /* Estilos básicos */
      padding: 10px 20px;
      border: none;
      border-radius: 8px; /* Bordes redondeados de la imagen */
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase; /* El texto en la imagen está en mayúsculas */
      transition: background-color 0.3s ease;

      /* Colores principales (Marrón-Dorado) */
      background-color: #a0813f; /* Color base */
      color: white; /* Texto blanco */
    }

    /* Efecto hover */
    .primary-btn:hover:not([disabled]) {
      background-color: #8c7038; /* Un tono más oscuro al pasar el ratón */
    }

    /* Estado deshabilitado */
    .primary-btn[disabled] {
      background-color: #cccccc; /* Gris claro */
      cursor: not-allowed;
      opacity: 0.7;
    }
    `]
})
export class PrimaryButtonComponent {
    @Input() label: string = 'Botón'; 

  /**
   * Booleano para deshabilitar el botón si es necesario.
   */
  @Input() disabled: boolean = false;

  /**
   * Evento que se emite cuando se hace clic en el botón.
   */
  @Output() btnClick = new EventEmitter<void>();
}