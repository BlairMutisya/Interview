import React from "react";
import CurrencyItem from "./CurrencyItem";
import '../styles.css'

const CurrencyList = ({ currencies }) => (
  <div className="currency-list">
    {currencies.map((currency) => (
      <CurrencyItem key={currency.code} currency={currency} />
    ))}
  </div>
);

export default CurrencyList;
