import Header from "./Header";
import Nav from "./Nav";

export default function HeaderNav() {
  return (
    <header>
      <nav>
        <ul>
          <li><Header /></li>
          <Nav />
        </ul>
      </nav>
    </header>
  );
}
