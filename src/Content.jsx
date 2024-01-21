import Form from "./Form";
import CardList from "./CardList";

const Content = ({country,setCountry,region,setRegion ,data,handleClick,iscolorChange}) => {
    return (
        <>
              
         <Form 
        country={country} 
        setCountry={setCountry}
        setRegion={setRegion}
        />

        

        <CardList 

iscolorChange={iscolorChange}
         handleClick={handleClick}
        data={data.filter((place)=>(
          place.name.common.toLowerCase().includes(country.toLowerCase()) && (
          place.region.toLowerCase().includes(region.toLowerCase())
          ) 
          ))}/> 
        </>
    );
}

export default Content;
