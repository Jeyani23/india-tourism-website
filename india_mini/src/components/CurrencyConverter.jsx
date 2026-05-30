import { useState, useEffect, useCallback } from "react";

// Supported currencies with symbols and names
const CURRENCIES = [
  { code: "INR", symbol: "₹", name: "Indian Rupee",    flag: "🇮🇳" },
  { code: "USD", symbol: "$", name: "US Dollar",        flag: "🇺🇸" },
  { code: "EUR", symbol: "€", name: "Euro",             flag: "🇪🇺" },
  { code: "GBP", symbol: "£", name: "British Pound",    flag: "🇬🇧" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham",    flag: "🇦🇪" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen",    flag: "🇯🇵" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺" },
];

// Free API — no key needed, uses open.er-api.com
const API_BASE = "https://open.er-api.com/v6/latest";

export default function CurrencyConverter({ isDark }) {
  const [amount, setAmount]         = useState("1000");
  const [fromCur, setFromCur]       = useState("INR");
  const [toCur, setToCur]           = useState("USD");
  const [rates, setRates]           = useState(null);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [converted, setConverted]   = useState(null);

  // Fetch exchange rates whenever fromCur changes
  const fetchRates = useCallback(async (base) => {
    setLoading(true);
    setError("");
    try {
      const res  = await fetch(`${API_BASE}/${base}`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      if (data.result !== "success") throw new Error("API error");
      setRates(data.rates);
      const d = new Date(data.time_last_update_utc);
      setLastUpdated(d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }));
    } catch {
      setError("Could not fetch rates. Showing estimated values.");
      // Fallback approximate rates relative to INR
      setRates({ INR:1, USD:0.012, EUR:0.011, GBP:0.0094, AED:0.044, JPY:1.81, SGD:0.016, AUD:0.018 });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchRates(fromCur); }, [fromCur, fetchRates]);

  // Recalculate whenever rates, amount, or toCur change
  useEffect(() => {
    if (!rates || !amount || isNaN(Number(amount))) { setConverted(null); return; }
    const rate   = rates[toCur] ?? 1;
    const result = Number(amount) * rate;
    setConverted(result);
  }, [rates, amount, toCur]);

  // Swap from ↔ to
  const handleSwap = () => {
    setFromCur(toCur);
    setToCur(fromCur);
  };

  const getCurrency = (code) => CURRENCIES.find(c => c.code === code);
  const fmt = (val, code) => {
    if (val === null) return "—";
    const sym = getCurrency(code)?.symbol ?? "";
    return sym + " " + val.toLocaleString("en-IN", {
      minimumFractionDigits: code === "JPY" ? 0 : 2,
      maximumFractionDigits: code === "JPY" ? 0 : 2,
    });
  };

  return (
    <section className="cc-wrapper">
      {/* Header */}
      <div className="section-header">
        <span className="section-icon">💱</span>
        <div>
          <h2 className="section-title">Currency Converter for Tourists</h2>
          <p className="section-sub">Live exchange rates — updated daily</p>
        </div>
      </div>

      <div className="cc-card">
        {/* Amount input */}
        <div className="cc-field-group">
          <label className="cc-label">Amount</label>
          <div className="cc-amount-row">
            <span className="cc-sym">{getCurrency(fromCur)?.symbol}</span>
            <input
              type="number"
              className="cc-input"
              value={amount}
              min="0"
              onChange={e => setAmount(e.target.value)}
              placeholder="Enter amount"
              aria-label="Amount to convert"
            />
          </div>
        </div>

        {/* Currency selectors + swap */}
        <div className="cc-selectors">
          <div className="cc-select-wrap">
            <label className="cc-label">From</label>
            <select
              className="cc-select"
              value={fromCur}
              onChange={e => setFromCur(e.target.value)}
              aria-label="From currency"
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>

          <button
            className="cc-swap"
            onClick={handleSwap}
            title="Swap currencies"
            aria-label="Swap currencies"
          >
            ⇄
          </button>

          <div className="cc-select-wrap">
            <label className="cc-label">To</label>
            <select
              className="cc-select"
              value={toCur}
              onChange={e => setToCur(e.target.value)}
              aria-label="To currency"
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="cc-result-box">
          {loading ? (
            <div className="cc-loading">
              <span className="cc-spinner" />
              Fetching live rates…
            </div>
          ) : (
            <>
              <p className="cc-result-from">
                {fmt(Number(amount) || 0, fromCur)}
              </p>
              <div className="cc-result-arrow">↓</div>
              <p className="cc-result-to">
                {fmt(converted, toCur)}
              </p>
              {rates && (
                <p className="cc-rate-info">
                  1 {fromCur} = {fmt(rates[toCur], toCur)}
                </p>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="cc-footer">
          {error && <span className="cc-error">⚠️ {error}</span>}
          {lastUpdated && !error && (
            <span className="cc-updated">Rates as of {lastUpdated}</span>
          )}
          <button className="cc-refresh" onClick={() => fetchRates(fromCur)} disabled={loading}>
            ↺ Refresh
          </button>
        </div>

        {/* Quick currency grid */}
        {rates && (
          <div className="cc-quick">
            <p className="cc-quick-title">1 {fromCur} in other currencies</p>
            <div className="cc-quick-grid">
              {CURRENCIES.filter(c => c.code !== fromCur).map(c => (
                <div
                  key={c.code}
                  className={`cc-quick-item ${c.code === toCur ? "cc-quick-active" : ""}`}
                  onClick={() => setToCur(c.code)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && setToCur(c.code)}
                >
                  <span className="cc-quick-flag">{c.flag}</span>
                  <span className="cc-quick-code">{c.code}</span>
                  <span className="cc-quick-val">
                    {c.symbol}{(rates[c.code] ?? 0).toLocaleString("en-IN", {
                      minimumFractionDigits: c.code === "JPY" ? 0 : 2,
                      maximumFractionDigits: c.code === "JPY" ? 0 : 2,
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
