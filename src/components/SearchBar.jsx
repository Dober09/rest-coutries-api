import React from 'react'

export default function SearchBar() {
  return (
    <div className='mt-4 ml-2'>
        <form  method='get'>
        
            <input 
            type="text"
            name="search" 
            id="search"
            placeholder='Search for a country...'
            className='bg-white shadow-2xl rounded-md w-96 pl-16  focus:outline-none h-12'
             />
        </form>

        <form  method="get" className='mt-3'>
            <select 
            className='bg-white w-36 h-10 px-2 rounded-md focus:outline-none appearance-none '
            name="countries"
            id=""
            >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    </div>
  )
}
