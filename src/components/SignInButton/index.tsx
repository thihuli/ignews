import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from "next-auth/react"

import styles from './styles.module.scss'

export function SingInButton() {
  const { data: session, status } = useSession();

  console.log('session', session)

  return (
    <button
      type="submit"
      className={styles.signInButton}
      onClick={() => status === "authenticated" ?  signOut() :  signIn('github')}
    >
      <FaGithub color={status === "authenticated" ? '#04d361' : '#eba417'} />
      {status === "authenticated" ? session.user.name : 'Sign in with Github'}
      {status === "authenticated" && <FiX color='#737380' className={styles.closeIcon}/> }
    </button>
  )
}