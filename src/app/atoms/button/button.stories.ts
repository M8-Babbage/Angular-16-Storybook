import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from "./button.component"
import ButtonDocumentation from "./button.md"

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  // En este punto podemos definir los argumentos que serán requeridos en el componente
  argTypes: {
    label: {
      name: 'label',
      description: 'Texto del botón',
      control: {
        type: 'text',
      },
      required: true,
    },
    type: {
      name: 'type',
      description: 'Tipo de botón',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    }
  },
  // Aquí podemos documentar el componente
  parameters: {
    docs: {
      page: null,
      description: {
        component: ButtonDocumentation,
      }
    }
  }
}

export default meta

type Story = StoryObj<ButtonComponent>

/**
 * Ejemplo de una historia, debe existir al menos una, donde se podrán pasar sus argumentos por medio de la propiedad args: { type: 'primary', label: 'Button' }, en este caso no se le envía porque lo estamos controlando desde el panel de controles
 */
export const Default: Story = {
  args: { label: 'Button', type: 'primary' },
}
