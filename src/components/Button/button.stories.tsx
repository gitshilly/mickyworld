import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

import type { Meta, StoryObj } from '@storybook/react'

const buttonMeta: Meta<typeof Button> = {
  title: '第四章 button',
  component: Button,
  //subcomponents: {}, // 子组件
  args: {
    children: 'primary button'
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  //parameters
}
export default buttonMeta

type Story = StoryObj<typeof buttonMeta>

export const Default: Story = {
  args: {
    //children: 'Default'
  }
};
