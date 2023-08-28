import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Auth></Auth>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
      </Switch>
    </>
  );
}

export default App;
