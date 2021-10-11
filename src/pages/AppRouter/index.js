import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SignInPage from "../SignInPage";
import ChatPage from "../ChatPage";
import NasaPage from "../NasaPage";
import ExchangeRatePage from "../ExchangeRatePage";

export default function AppRouter() {
  return (
    <div>
      <ul>
        <li><NavLink exact to="/">Index</NavLink></li>
        <li><NavLink to="/chat">Chat</NavLink></li>
        <li><NavLink to="/nasa">NASA</NavLink></li>
        <li><NavLink to="/exchange-rate">Exchange Rate</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/nasa" component={NasaPage} />
        <Route path="/exchange-rate" component={ExchangeRatePage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
}
