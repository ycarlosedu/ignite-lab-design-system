import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes } from 'react';

export interface InputRootProps {
  children: React.ReactNode
}

function InputRoot(props: InputRootProps) {
  return <div className="w-full flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
    {props.children}
  </div>
}

InputRoot.displayName = 'InputComponent.Root'

export interface InputIconProps {
  children: React.ReactNode
}

function InputIcon(props: InputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

InputIcon.displayName = 'InputComponent.Icon'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

function Input(props: InputProps) {

  return (
    <input {...props}
      className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'
    />
  )
}

Input.displayName = 'InputComponent.Input'

export const InputComponent = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,
}