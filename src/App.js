import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const tip = bill * ((percentage + friendPercentage) / 2 / 100);

  function handleReset() {
    setBill("");
    setFriendPercentage(0);
    setPercentage(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage} onSelect={setPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onSelect={setFriendPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      {/* if bill is greater than zero show output and reset component if the bill isnt greater than 0 no reset button shows */}
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="text"
        placeholder="Bill value"
      ></input>
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay {bill + tip} (${bill} + {tip} tip)
      </h3>
    </div>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

export default App;
