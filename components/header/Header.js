import React from "react";
import Nav from "./nav/Nav";
import Image from "next/image";
import styles from "./header.module.scss";

function Header(props) {
    const { isLoggedIn, setIsLoggedIn } = props;
  return (
    <div className={styles.container}>
      <Image
        priority
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="image"
      />
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Header;
