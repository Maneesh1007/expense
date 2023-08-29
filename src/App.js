import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import CompleteProfile from "./pages/CompleteProfile";
import ForgotPassword from "./components/ForgotPassword";

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
        <Route path="/profile" exact>
          <CompleteProfile></CompleteProfile>
        </Route>
        <Route path="/forgot" exact>
          <ForgotPassword></ForgotPassword>
        </Route>
      </Switch>
    </>
  );
}

export default App;
