import { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { SignIn } from './index'
import { rest } from 'msw'

export default {
  title: 'Components/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }));
        })
      ],
    }
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const { getByText, getByRole, getByPlaceholderText } = within(canvasElement)

    userEvent.type(getByPlaceholderText('Digite seu e-mail'), 'test@test.com')
    userEvent.type(getByPlaceholderText('**********'), '12345678')

    userEvent.click(getByRole('button'))

    await waitFor(() => {
      expect(getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
