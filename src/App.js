import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
