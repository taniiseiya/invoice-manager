import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const res = await axios.get('/api/invoices');
      setInvoices(res.data);
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <Link to="/create">Create Invoice</Link>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice._id}>{invoice.client} - {invoice.amount} - {invoice.dueDate} - {invoice.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;