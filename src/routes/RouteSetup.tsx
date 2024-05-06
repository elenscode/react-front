import { Routes, Route } from "react-router-dom";
import NoMatch from "./NoMatch";
import Home from "./Home";
import Layout from "./Layout";
import Loading from "./Loading";

export default function RouteSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Loading />}></Route>
        <Route path="/home" element={<Home title="abc" />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Route>
    </Routes>
  );
}
