import React, { useState, useEffect } from 'react';

function TableRow(row) {
    return (
      <tr>
        <td className='bg-warning'>{row.item[0]}</td>
        <td className='bg-warning'>{(parseFloat(row.item[1])+(parseFloat(row.item[1])*0.02))}</td>
        <td className='bg-warning'>{row.item[1]}</td>
        <td className='bg-warning'>{(row.item[1]-(row.item[1]*0.02))}</td>
      </tr>
    )
  }

function CurrencyPusing() {
    const [currency, setCurrency] = useState([])
    let api_key = "c8eb286aef27411dac3513e3e3116b57";

    useEffect(() => {    
        fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=" + api_key)
          .then(response => response.json())
          .then(data => {
            let arrCurrency = [];
    
            ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"].forEach(key => {
              let el0 = key;
              let el1 = data.rates[key];
              let element = [el0, el1];
              arrCurrency.push(element);
            });
    
            setCurrency(arrCurrency);
          });
      }, []);

    return (
		<tbody>
            {currency.map(curr => <TableRow item={curr} />)}
			{/* { <td className='bg-warning'>{currency[0][0]}</td>
			<td className='bg-warning'>{(parseFloat(currency[0][1])+(parseFloat(currency[0][1])*0.02))}</td>
			<td className='bg-warning'>{currency[0][1]}</td>
			<td className='bg-warning'>{(currency[0][1]-(currency[0][1]*0.02))}</td> } */}
		</tbody>
	)
}

export default CurrencyPusing;