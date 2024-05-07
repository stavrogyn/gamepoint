'use client'
 
import { useFormState } from 'react-dom'
import { SigninButton } from './sign-in-button'
import { signin } from '@/shared/actions/sign-in'
 
export function SigninForm() {
  const [state, action] = useFormState(signin, undefined)
 
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
      <SigninButton />
    </form>
  )
}
