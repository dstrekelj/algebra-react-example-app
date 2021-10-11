import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

function ExchangeRates() {
  const { data, loading, error} = useQuery(gql(`
  {
    rates(currency: "EUR") {
      currency
      rate
    }
  }
  `));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <div>Tečaj za EUR</div>
      <ul>
        {data.rates.map((item) =>
          <li key={item.currency}>
            {item.currency}: {item.rate}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function ExchangeRatePage() {
  return (
    <ApolloProvider client={client}>
      <div className="ExchangeRatePage">
        <h1>Exchange Rate</h1>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}
