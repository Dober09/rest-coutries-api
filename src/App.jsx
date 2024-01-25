import Header from "./Header";
import "./App.css"
import CardDetail from "./CardDetail";
import { data } from "./data";
import { useEffect, useState } from "react";
import Content from "./Content";
const App = () => {

  const [data,setData] = useState([])
  const [country,setCountry] = useState('')
  const [region,setRegion] = useState('')
  const [countryData,setCountryData] = useState([])
  const [isDetail,setIsDetail] = useState(false)
  const [iscolorChange,setIsColorChange] = useState(true) 
  const ENDPOINT = "https://restcountries.com/v3.1/all"

  useEffect(()=>{
    fetch(ENDPOINT)
    .then(response=>response.json())
    .then(deta=>setData(deta))
  },[isDetail])

  const handleClick = (name)=>{
    setIsDetail(!isDetail)
  
    const countryDetail = (data.filter(place=>(place.name.common.toLowerCase().includes(name.name.toLowerCase()))))
    setCountryData(countryDetail)
    
  }
  
  const handleBackgroundChange = ()=>{
    if(iscolorChange){
      document.body.style.backgroundColor = "snow"
      document.body.style.color ="hsl(207, 26%, 17%)"
      document.querySelector("main").style.backgroundColor = "snow"
    }else{
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)"
      document.querySelector("main").style.backgroundColor =  "hsl(207, 26%, 17%)"
      document.body.style.color = "snow"
    }
    setIsColorChange(()=>!iscolorChange)
    
  }

  return (
      <main>
        <Header 
        handleBackgroundChange={handleBackgroundChange} 
        iscolorChange={iscolorChange}
        />
        {isDetail?
        <CardDetail
        handleClick={handleClick}
        countryData={countryData}
        />
        :
        <Content
          country={country}
          setCountry={setCountry}
          region={region}
          setRegion={setRegion}
          data={data}
          handleClick={handleClick}
          iscolorChange={iscolorChange}
        />
        }
      
        
       

      </main>
  );
}

export default App;
