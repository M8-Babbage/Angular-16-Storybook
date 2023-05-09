import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';

/**
 construir una lista de clases CSS a partir de los argumentos pasados,
 */
const getStyles = (...args: string[]) => ["button", ...args].filter(Boolean);

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  // Propiedades que serán requeridas en el componente
  @Input({ required: true }) label: string = 'Button';
  @Input({ required: true }) type: 'primary' | 'secondary' | 'tertiary' = 'primary';

  public get classes(): string[] {
    return getStyles(this.type);
  }
}
