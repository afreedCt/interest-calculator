import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const Calculator = () => {
  const [principleAmount, setPrincipleAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(0);
  const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false);
  const [isInvalidInterest, setIsInvalidInterest] = useState(false);
  const [isInvalidYear, setIsInvalidYear] = useState(false);

  console.log(principleAmount, interest, year);
  function handleInputChange(e) {
    let validRejex = /^[0-9]*.?[0-9]+$/
    const { name, value } = e.target;

    if (name == "Amount") {
      if (validRejex.test(value)) {
        setIsInvalidPrinciple(false);
        setPrincipleAmount(value);
      } else {
        setIsInvalidPrinciple(true);
      }
    } else if (name == "Interest") {
      if (validRejex.test(value)) {
        setIsInvalidInterest(false);
        setInterest(value);
      } else {
        setIsInvalidInterest(true);
      }
    } else {
      if (validRejex.test(value)) {
        setIsInvalidYear(false);
        setYear(value);
      } else {
        setIsInvalidYear(true);
      }
    }
  }

  // main calculation
  const handleCalculate=()=>{
    if(principleAmount && interest && year){
      setResult((parseFloat(principleAmount)*parseFloat(interest)*parseFloat(year))/100)
    }else{
      alert('check your data again ...')
    }
  }

  // reset the forms
  const handleReset=()=>{
    setPrincipleAmount('')
    setInterest('')
    setYear('')
    setResult(0)
    setIsInvalidPrinciple(false);
    setIsInvalidInterest(false);
    setIsInvalidYear(false);
  }

  return (
    <main className="bg-info min-vh-100 d-flex justify-content-center align-items-center">
      <div className="bg-white w-100 w-md-75 w-lg-50 p-3 rounded-5 mx-2">
        <h1 className="text-success fw-bold text-center fs-1 fs-md-3 my-3">
          Simple Interest Calculator
        </h1>
        <section className="d-flex justify-content-center flex-column align-items-center">
          <div className="w-100 w-md-75 w-lg-50 bg-warning rounded-4 text-center d-flex justify-content-center align-items-center flex-column p-3 mb-3">
            <h1 className="fs-3">
              &#8377;<span>{result}</span>
            </h1>
            <h2 className="fs-5">Total Simple Interest</h2>
          </div>

          <div className="w-100">
            <TextField
            value={principleAmount}
              name="Amount"
              onChange={(e) => handleInputChange(e)}
              label="Principal Amount"
              variant="outlined"
              fullWidth
              className="shadow my-2"
            />
            {isInvalidPrinciple && (
              <div className="text-danger fw-bold mx-2">
                Invalid principal amount
              </div>
            )}

            <TextField
            value={interest}
              name="Interest"
              onChange={(e) => handleInputChange(e)}
              label="Interest Rate"
              variant="outlined"
              fullWidth
              className="shadow my-2"
            />
            {isInvalidInterest && (
              <div className="text-danger fw-bold mx-2">
                Invalid interest rate
              </div>
            )}

            <TextField
            value={year}
              name="Year"
              onChange={(e) => handleInputChange(e)}
              label="Year"
              variant="outlined"
              fullWidth
              className="shadow my-2"
            />
            {isInvalidYear && (
              <div className="text-danger fw-bold mx-2 my-2">Invalid year</div>
            )}

            <div className="d-flex flex-column flex-md-row gap-3 mt-3">
              <button onClick={handleCalculate} disabled={isInvalidInterest || isInvalidPrinciple || isInvalidYear} className="w-100 p-3 fw-bold bg-black text-white shadow rounded-4">
                CALCULATE
              </button>
              <button onClick={handleReset} className="w-100 p-3 fw-bold shadow rounded-4 bg-light border border-primary">
                RESET
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Calculator;
