import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_Quotes = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Maximilian", text: "Learning React is great!" },
  ];

const QuoteDetails = () => {
  const params = useParams();
  const quote = Dummy_Quotes.find(quote => quote.id === params.quoteId);
  if(!quote){
    return <p>No quote found!!</p>
  }
  return (
    <Fragment>
      <h1>Quotes Details</h1>
      <HighlightedQuote text={quote.text} author={quote.auther} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>

    </Fragment>
  );
};

export default QuoteDetails;
