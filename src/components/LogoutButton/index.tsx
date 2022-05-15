import {FaSignInAlt} from 'react-icons/fa';
import styles from './styles.module.scss';

export function LogoutButton(){
  return(
    <button
      type="button"
      className={styles.logoutButton}
      onClick={() => {}}
    >
      < FaSignInAlt color='#e1e1e6'/>
      Logout
    </button>
  )
}
