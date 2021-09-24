import Link from "next/link";
import styles from "./nav.module.scss"

function Nav(props) {

    const { isLoggedIn, setIsLoggedIn } = props;
  

    const logOutUser = () => {
      setIsLoggedIn(false);
      alert("bye");
  };

  return (
    <div className={styles.navbar}>
      {isLoggedIn ? (
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <button onClick={logOutUser}>Log Out</button>
          </li>
        </ul>
      ) : (
        <button>Log In</button>
      )}
    </div>
  );
}

export default Nav;
