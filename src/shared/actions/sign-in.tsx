import { authModel } from '@/app/account/auth.model'
import { SignupFormSchema, FormState } from '@/shared/lib/definitions'
import { sample } from 'effector'
 
export async function signin(state: FormState, formData: FormData) {
  const name = formData.get('name')
  const password = formData.get('password')

  authModel.inputs.signin();
}
