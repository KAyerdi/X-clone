import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AuthButton } from './auth-button-client';



export async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()


  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4'>Iniciar sesion en DevTer</h1>
  <AuthButton session={session} />
  </section>
)
}