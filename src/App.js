import CurrencyPusing from "./components/CurrencyPusing";

function App() {
  return (
    <div className="container mt-3" style={{ backgroundColor: "orange" }}>
      <div className="card bg-info-subtle mb-3">
        <div className="card-body">
          <h3>Assignment and Homework 6</h3>
        </div>
      </div>

      <div class="row justify-content-center">
      <table className="table table-bordered w-50" style={{ backgroundColor: "orange" }}>
        <thead>
          <tr>
            <th className='bg-warning'></th>
            <th className='bg-warning'>We Buy</th>
            <th className='bg-warning'>Exchange Rate</th>
            <th className='bg-warning'>We Sell</th>
          </tr>
        </thead>
        {/* <tbody> */}
          <CurrencyPusing />
        {/* </tbody> */}
      </table>
      <p style={{textAlign: "center", color: "white"}}>*Base Currency is in USD</p>
      <p style={{textAlign: "center", color: "white"}}>*As for API, <a style={{color: "white"}} href="https://currencyfreaks.com/">https://currencyfreaks.com/</a> is used</p>
      </div>
      

    </div>
  );
}

export default App;
