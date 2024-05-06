// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type HomePros = {
  title: string;
};

export default function Home({ title }: HomePros) {
  const location = useLocation();
  return (
    <div>
      {/* <Link to="/">home</Link>
      <Link to="/abc">NoMatch</Link> */}
      <p>locatio : {JSON.stringify(location, null, 2)}</p>
      <p>{title ?? "Home"}</p>
    </div>
  );
}
