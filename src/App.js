import React from 'react';
import CategoriesProvider from "./context/CategoriesContext";
import EventsProvider from "./context/EventsContext";

import Form from "./components/Form";
import Header from "./components/Header";
import ListEvents from "./components/ListEvents";

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header/>
        <div className="uk-container">
          <Form/>
          <ListEvents/>
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
