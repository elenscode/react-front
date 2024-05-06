import "./App.css";
// import { ChangeEvent } from "react";
// import EventComponent from "./EventComponent";
// import Clock from "./Clock";
// import { useClock } from "./hooks";
import { UserProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";
import RouteSetup from "./routes/RouteSetup";

function App() {
  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // };
  // const today = useClock();

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          {/* <div>
            <EventComponent />
            <input type="text" onChange={onChange} />
            <Clock today={today} />
          </div> */}
          <RouteSetup />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
