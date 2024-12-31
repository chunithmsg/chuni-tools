import { Link } from "react-router";

function Home() {
  return (
    <div>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </div>
  );
}

export default Home;
