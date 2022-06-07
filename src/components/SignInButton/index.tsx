import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss'

export function SingInButton() {
  const isUserLoggedIn = true;
  const userName = 'Thiago Fernandes'

  return (
    <button
      type="submit"
      className={styles.signInButton}
    >
      <FaGithub color={isUserLoggedIn ? '#04d361' : '#eba417'} />
      {isUserLoggedIn ? userName : 'Sign in with Github'}
      {isUserLoggedIn && <FiX color='#737380' className={styles.closeIcon}/> }
    </button>
  )
}