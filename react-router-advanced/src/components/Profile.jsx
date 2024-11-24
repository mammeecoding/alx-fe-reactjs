// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function profile() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Profile Details</Link>
          </li>
          <li>
            <Link to="/ProfileSettings">ProfileSettings</Link>
          </li>
        
        </ul>

        <Switch>
          <Route path="/">
            <ProfileDetails />
          </Route>
          <Route path="/ProfileSettings">
            <ProfileSettings/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ProfileDetails() {
  return <h2>Profile Details</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings</h2>;
}
function profile() {
return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
