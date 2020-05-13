import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/Directory";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Yo from Hats Page</h1>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="homepage">
      <Switch>
        <Route exact path="/" component={Directory} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default HomePage;
