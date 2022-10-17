import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../../Components/Button'
import { Checkbox } from '../../Components/Checkbox'
import { Heading } from '../../Components/Heading'
import { InputComponent } from '../../Components/Input'
import { Text } from '../../Components/Text'
import { Logo } from '../../Logo'
import axios from 'axios'
import './styles/global.css'

export function SignIn() {
  const [isUserSignedIn, setisUserSignedIn] = useState(false)

  function handleSignIn(event: FormEvent) {
    event.preventDefault()

    axios.post('/sessions', {
      email: 'test@test.com',
      password: '12345678'
    })

    setisUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size='lg' className="mt-4">
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSignIn} className="flex flex-col flex-stretch w-full max-w-sm mt-10 gap-4">
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className="font-semibold">Endereço de e-mail</Text>
          <InputComponent.Root>
            <InputComponent.Icon>
              <Envelope />
            </InputComponent.Icon>
            <InputComponent.Input id="email" type="email" placeholder='Digite seu e-mail' />
          </InputComponent.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className="font-semibold">Sua senha</Text>
          <InputComponent.Root>
            <InputComponent.Icon>
              <Lock />
            </InputComponent.Icon>
            <InputComponent.Input type="password" id="password" placeholder='**********' />
          </InputComponent.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
