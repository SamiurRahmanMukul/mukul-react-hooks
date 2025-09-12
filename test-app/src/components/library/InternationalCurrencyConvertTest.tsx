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
        <h3>📚 Implementation Documentation</h3>
        <div className="demo-output">
          <h4>API Reference</h4>
          <pre
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              textAlign: "left",
            }}
          >
            {`import { lib } from 'mukul-react-hooks';

const abbreviated = lib.internationalCurrencyConvert(value);`}
          </pre>

          <h4>Parameters</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>labelValue</strong> (string | number): Numeric value to abbreviate
            </li>
          </ul>

          <h4>Return Value</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>string | number</strong>: Abbreviated string (e.g., "1.2K", "5M", "2B") or
              original number if &lt; 1000
            </li>
          </ul>

          <h4>Abbreviation Rules</h4>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>
              <strong>≥ 1,000,000,000:</strong> "B" (Billions)
            </li>
            <li>
              <strong>≥ 1,000,000:</strong> "M" (Millions)
            </li>
            <li>
              <strong>≥ 1,000:</strong> "K" (Thousands)
            </li>
            <li>
              <strong>&lt; 1,000:</strong> Original number
            </li>
          </ul>

          <h4>Usage Examples</h4>
          <pre
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              textAlign: "left",
              fontSize: "0.875rem",
            }}
          >
            {`// Social media metrics
const SocialStats = ({ followers, likes, views }) => (
  <div className="stats">
    <span>{lib.internationalCurrencyConvert(followers)} followers</span>
    <span>{lib.internationalCurrencyConvert(likes)} likes</span>
    <span>{lib.internationalCurrencyConvert(views)} views</span>
  </div>
);

// Financial dashboard
const RevenueCard = ({ revenue }) => (
  <div className="metric">
    <h3>$\{lib.internationalCurrencyConvert(revenue)\}</h3>
    <p>Total Revenue</p>
  </div>
);

// Chart labels
const formatChartValue = (value) => {
  return lib.internationalCurrencyConvert(value);
};
// 1500000 -> "2M"
// 750000 -> "750K"
// 500 -> 500

// File size display
const FileSizeDisplay = ({ bytes }) => (
  <span>
    {lib.internationalCurrencyConvert(bytes)} bytes
  </span>
);

// Analytics dashboard
const AnalyticsWidget = ({ data }) => (
  <div>
    <p>Users: {lib.internationalCurrencyConvert(data.users)}</p>
    <p>Sessions: {lib.internationalCurrencyConvert(data.sessions)}</p>
    <p>Page Views: {lib.internationalCurrencyConvert(data.pageViews)}</p>
  </div>
);`}
          </pre>
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
