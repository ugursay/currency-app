import React from "react";
import "../css/Currency.css";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_9MoYm30RI4jOrZBDagbNAuqtRsz2M2zOriaeH2da";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exChange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);

    const response = await axios.get(
      BASE_URL + "?apikey=" + API_KEY + "&base_currency=" + fromCurrency
    );
    setResult((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          fontFamily: "arial",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2>Döviz Kuru Uygulaması</h2>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amout"
          input="number"
        ></input>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <BiSolidRightArrowSquare className="okIsareti" />

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="result"
          input="number"
        ></input>
      </div>
      <div>
        <button onClick={exChange} className="cevirButton">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
