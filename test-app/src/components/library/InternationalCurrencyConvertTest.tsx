import { useState } from "react";

export default function InternationalCurrencyConvertTest() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  return (
    <div>
      <h1>internationalCurrencyConvert Function Test</h1>
      <p>
        This function converts currency amounts between different international currencies. Note:
        This test demonstrates the function interface. Actual currency conversion requires real
        exchange rate data.
      </p>

      <div className="test-section">
        <h3>Currency Converter</h3>
        <div className="form-group">
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>From Currency:</label>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div className="form-group">
          <label>To Currency:</label>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>

        <div className="demo-output">
          <p>
            Function call: lib.internationalCurrencyConvert({amount}, "{fromCurrency}", "
            {toCurrency}")
          </p>
          <p>This function would return the converted amount based on current exchange rates.</p>
        </div>
      </div>

      <div className="test-section">
        <h3>Real-world Use Cases</h3>
        <div className="grid">
          <div className="result-box">
            <h4>🛒 E-commerce</h4>
            <p>Convert product prices for international customers</p>
          </div>
          <div className="result-box">
            <h4>💼 Business</h4>
            <p>Financial reporting across different markets</p>
          </div>
          <div className="result-box">
            <h4>✈️ Travel</h4>
            <p>Help travelers understand costs in local currency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
