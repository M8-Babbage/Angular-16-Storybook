import { CommonModule } from '@angular/common';
import { Component, Input, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input({ required: true }) label: string = '';
  firstName = signal(this.label);
  lastName = signal('Susano');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  effect = effect(() => console.log('Nombre cambió: ', this.firstName()))

  setName(newName: string) {
    this.firstName.set(newName);
  }
}
