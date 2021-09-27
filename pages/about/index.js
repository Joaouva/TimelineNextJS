import Link from "next/link";

function about() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/about/mycompany" passHref>
        <h3>My Company Page</h3>
      </Link>
      <Link href="/about/myprofile" passHref>
        <h3>My Profile Page</h3>
      </Link>
    </div>
  );
}

export default about;
