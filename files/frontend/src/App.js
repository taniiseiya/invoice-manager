import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvoiceList from './pages/InvoiceList';
import CreateInvoice from './pages/CreateInvoice';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={InvoiceList} exact />
        <Route path="/create" component={CreateInvoice} />
      </Switch>
    </Router>
  );
}

export default App;