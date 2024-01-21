import Card from "./Card";

const CardList = ({data,handleClick, iscolorChange}) => {
    return (
        <div className="container">
        {data.map((item,idx)=>(
          <Card 
          iscolorChange={iscolorChange}
          key={idx} 
          name={item.name.common} 
          image={item.flags.png}  
          population={item.population} 
          capital ={item.capital} 
          region={item.region}
          handleClick={handleClick}
           />
        ))}
            
        </div>
    );
}

export default CardList;
