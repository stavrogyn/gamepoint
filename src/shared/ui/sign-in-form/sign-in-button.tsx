'use client'
 
import { useFormStatus, useFormState } from 'react-dom'
 
export function SigninButton() {
  const { pending } = useFormStatus()
 
  return (
    <button aria-disabled={pending} type="submit">
      {pending ? 'Signing In...' : 'Sign In'}
    </button>
  )
}
