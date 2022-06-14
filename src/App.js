import React from "react";
import "./App.css";
import { Link, Route } from "wouter"; // el link vendria a ser como un a para que solo haga refresh ese componente de la pagina
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "ian",
        suscribiteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
