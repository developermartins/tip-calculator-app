import React from 'react';
import './App.css';

const App = () => {
  return (
    <section className="main-section">
      <section className='header-section'>
        <h1>spli<br />tter</h1>
      </section>
      <section className='calculator-section'>
        <span>Bill</span>
        <input type="text" />
        <span>Select Tip %</span>
        <section className='buttons-section'>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <button>Custom</button>
        </section>
        <span>Number of people</span>
        <input type="text" />
        <section className="result-section">
          <div className='amount-container'>
            <p>Tip Amount <br />
              <span>/ person</span>
            </p>
            <span>$4.27</span>
          </div>
          <div className='total-container'>
            <p>Total <br />
              <span>/ person</span>
              <span>$32.79</span>
            </p>
          </div>
          <button>RESET</button>
        </section>
      </section>
    </section>
  );
};

export default App;
