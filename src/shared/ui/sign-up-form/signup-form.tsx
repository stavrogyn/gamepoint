'use client'
 
import { useFormState } from 'react-dom'
import { signup } from '@/shared/actions/sign-up'
import { SignupButton } from './signup-button'
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from 'react'
 
export function SignupForm() {
  const [state, action] = useFormState(signup, undefined)
 
  return (
    <form action={action} className='text-cyan-400 bg-slate-500'>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" className='text-black' />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="password" >Password</label>
        <input id="password" name="password" type="password" className='text-black' />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error: any) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SignupButton />
    </form>
  )
}
