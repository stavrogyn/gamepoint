import { authModel } from '@/app/account/auth.model'
import { SignupFormSchema, FormState } from '@/shared/lib/definitions'
import { sample } from 'effector'

 
export async function signin(state: FormState): Promise<FormState> {
  // const name = formData.get('name')
  // const password = formData.get('password')

  await authModel.inputs.signin();

  return state;
}
