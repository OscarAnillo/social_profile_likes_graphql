import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import App from "./App.jsx";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3005/",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
