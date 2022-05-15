import { AppProps } from 'next/app';
import { LogoutButton } from '../LogoutButton';
import { SigInButton } from '../SignInButton';
import styles from './styles.module.scss';

interface PropsHeader {
  session: AppProps;
}

export function Header(props:PropsHeader){ //rever a conf de props
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="Physio App" />
        <nav>
          <a className={styles.active}>Physio App</a>
          <a>Posts</a>
        </nav>
        {
          console.log(props.session)
        }
        {

          props.session === undefined
          ? <SigInButton />
          : <LogoutButton />
        }
      </div>
    </header>
  );
}
;
