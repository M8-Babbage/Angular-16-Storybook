import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from "./button.component"

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  args: {
    label: 'Button',
  }
}

export default meta

type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
  args: {
    type: 'primary',
  }
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  }
}

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
  }
}
