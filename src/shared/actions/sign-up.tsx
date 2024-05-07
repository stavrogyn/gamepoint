import { SignupFormSchema, FormState } from '@/shared/lib/definitions'
 
export async function signup(state: FormState, formData: FormData) {
  // const validatedFields = SignupFormSchema.safeParse({
  //   name: formData.get('name'),
  //   password: formData.get('password'),
  // })
 
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //   }
  // }
 
  // const { name, password } = validatedFields.data

  const name = formData.get('name')
  const password = formData.get('password')

  console.log('Creating user:', { name, password })

  const user = await fetch(`https://gamepointcenter.api.enes.tech/login/`, {
    method: 'POST',
    body: `{"login": "${name}", "password": "${password}"}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then((res) => res.json())

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  console.log('User created:', user)

  return user;
}
