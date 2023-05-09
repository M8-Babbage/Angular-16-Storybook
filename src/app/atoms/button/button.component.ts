import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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


  get classes(): string[] {
    return this.getStyles(this.type);
  }

  private getStyles = (...args: string[]) => ["button", ...args].filter(Boolean);

}
