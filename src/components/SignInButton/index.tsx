import {FaSignInAlt} from 'react-icons/fa';
import styles from './styles.module.scss';

export function SigInButton(){
  return(
    <button type="button" className={styles.signInButton}>
      < FaSignInAlt color='#e1e1e6'/>
      Login
    </button>
  )
}
