import React from 'react'

export default function Card() {
  return (
    <div className="ml-10 pb-8 bg-white w-80  shadow-md  rounded-md overflow-auto">
        <img src=" https://flagcdn.com/w320/us.png" alt="flag" />
        <div className='ml-10'>

        <p 
        id='country-name' 
        className=' text-xl font-bold my-3 '>United states of America</p>
        <p>
            <span> Population :  </span> <span>345,535,00</span>
        </p>
        <p className='my-1'>
            <span> Region : </span> <span>Americans</span>
        </p>
        <p> 
            <span> Capital : </span> <span>Washington, D.C</span>
        </p>
       
        </div>
    </div>
  )
}
