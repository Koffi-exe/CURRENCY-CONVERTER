import React from 'react'

const Input = (props) => {
    const {
        amount,
        currencyOptions=[],
        onAmountChange,
        selectedCurrency,
        onCurrencyChange
       }=props

  return (
    <>
        <input
        type='number'
        className='inputField'
        placeholder='Amount'
        value={amount}
        onChange={(e)=> onAmountChange(e.target.value)}
      />
      <select
        className='inputSelect'
        value={selectedCurrency}
        onChange={(e)=> onCurrencyChange(e.target.value)}
        >
          {/* OPTIONS LOOP  */}
          {currencyOptions.map((option)=>{
            return(
              <option value={option} key={option}>{option}</option>
            )
          })}
      </select>
    </>
  )
}

export default Input
