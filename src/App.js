import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes"/>
      </Route>
      <Route path="/quotes" component={AllQuotes} exact />
      <Route path="/quotes/:quoteId" component={QuoteDetails} />
      <Route path="/new-quote" component={NewQuote} />
    </Switch>
  );
}

export default App;
