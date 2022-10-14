import { Meta, StoryObj } from '@storybook/react'
import { InputComponent, InputRootProps } from './index'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/Input',
  component: InputComponent.Root,
  args: {
    children: [
      <InputComponent.Icon>
        <Envelope />
      </InputComponent.Icon>,
      <InputComponent.Input placeholder="Type your e-mail address" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children:
      <InputComponent.Input placeholder="Type your e-mail address" />
  },
}
