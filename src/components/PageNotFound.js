import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section>
      <h2>Page Not Found</h2>
      <Link to="/">Return to Home Page</Link>
    </section>
  );
}
