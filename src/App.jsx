import { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App(props) {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [resultAmount, setResultAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = [...Object.keys(currencyInfo)];

  const convert = () => {
    setResultAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1>Currency Convertor</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <Input
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(cur)=> setFrom(cur)}
          onAmountChange={(amount)=>{setAmount(amount)}}
          selectedCurrency={from}
        />
        <div className="equals">=</div>
        <Input
          amount={resultAmount}
          currencyOptions={options}
          onCurrencyChange={(cur)=> setTo(cur)}
          onAmountChange={(amount)=>{setAmount(amount)}}
          selectedCurrency={to}
        />
        <div>
        <button className="button" type="submit">Convert</button>
        </div>
      </form>
    </>
  );
}

export default App;
