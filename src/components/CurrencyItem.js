import React from "react";
import '../styles.css'

const CurrencyItem = ({ currency }) => {
  const { code, name, rate, country, flag } = currency;

  return (
    <div className="currency-item">
      <img src={`assets/flags/${flag}`} alt={`${country} flag`} />
      <div>
        <h3>{country}</h3>
        <p>{name} ({code})</p>
      </div>
      <div className="rate">
        <p>1 {code} = {rate} KES</p>
      </div>
    </div>
  );
};

export default CurrencyItem;
