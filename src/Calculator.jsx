import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

const Calculator = () => {
    const [principleAmount,setPrincipleAmount]=useState(0)
    const [interest,setInterest]=useState(0)
    const [year,setYear]=useState(0)
    const [result,setResult]=useState(0)
    const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
    const [isInvalidInterest,setIsInvalidInterest]=useState(false)
    const [isInvalidYear,setIsInvalidYear]=useState(false)
    return (
        <div>
            <main className='bg-info w-100 min-vh-100 d-flex justify-content-center align-items-center' >
                <div className='bg-white w-50 h-50 p-3 my-2 rounded-5'>
                    <h1 className='text-left fw-bold mx-5 my-4 text-success' style={{fontSize:"35px"}}>Simple Interest Calculator</h1>
                    <h1 className='text-left fw-bold mx-5 my-4' style={{fontSize:"35px"}}>Calculate Your Simple Interest</h1>
                <section className=' d-flex justify-content-center flex-column align-items-center'>
                    <div className='w-75 bg-warning rounded-4 text-center d-flex justify-content-center align-items-center flex-column' style={{minHeight:"200px"}}>
                        <h1 className='d-block'>&#8377;<span>0</span></h1>
                        <h1>Total Simple Interest</h1>
                    </div>
                    <div className='w-75'>
                        <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100 shadow my-2 ' />
                        {isInvalidPrinciple&&<div className='text-danger fw-bold mx-2'>Invalid principle amount</div>}
                        <TextField id="outlined-basic" label="Interest Rate" variant="outlined" className='w-100 shadow my-2 ' />
                        {isInvalidInterest&&<div className='text-danger fw-bold mx-2'>Invalid interest rate</div>}
                        <TextField id="outlined-basic" label="Year" variant="outlined" className='w-100 shadow my-2 ' />
                        {isInvalidYear&&<div className='text-danger fw-bold mx-2 my-2'>Invalid year</div>}
                        <div className='d-flex justify-content-between w-100 gap-3 '>
                            <button className='w-50 p-3 fw-bold bg-black text-white text-center shadow rounded-4'>calculate</button>
                            <button className='reset-btn w-50 p-3 fw-bold shadow rounded-4 bg-light border border-primary ' >RESET</button>
                        </div>
                    </div>
                </section>
                </div>

            </main>
        </div>
    )
}

export default Calculator
