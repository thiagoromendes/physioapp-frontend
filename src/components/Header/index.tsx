import { SigInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="Physio App" />
        <nav>
          <a className={styles.active}>Physio App</a>
          <a>Posts</a>
        </nav>
        <SigInButton />
      </div>
    </header>
  );
}
;
